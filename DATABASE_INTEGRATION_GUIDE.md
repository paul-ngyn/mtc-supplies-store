# Database Integration Guide for MTC Supplies Store

## Overview
This guide explains how to migrate from hardcoded sample data in `app/search/page.tsx` to a full Supabase database integration.

---

## Current State
- **Sample Data**: 43 products hardcoded in `app/search/page.tsx`
- **Search**: Client-side filtering by name, brand, category, description, and tags
- **Filters**: Brand filtering and sorting (relevance, name, brand)

---

## Database Schema

### 1. Products Table

```sql
-- Create products table in Supabase
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  brand TEXT NOT NULL,
  brand_slug TEXT NOT NULL,
  category TEXT NOT NULL,
  category_slug TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  price DECIMAL(10, 2),
  stock_quantity INTEGER DEFAULT 0,
  sku TEXT UNIQUE,
  tags TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create indexes for better search performance
CREATE INDEX idx_products_brand ON products(brand);
CREATE INDEX idx_products_category ON products(category);
CREATE INDEX idx_products_brand_slug ON products(brand_slug);
CREATE INDEX idx_products_category_slug ON products(category_slug);
CREATE INDEX idx_products_name ON products USING gin(to_tsvector('english', name));
CREATE INDEX idx_products_description ON products USING gin(to_tsvector('english', description));
CREATE INDEX idx_products_tags ON products USING gin(tags);

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active products
CREATE POLICY "Allow public read access to active products"
ON products FOR SELECT
USING (is_active = true);

-- Only authenticated users can insert/update/delete
CREATE POLICY "Authenticated users can manage products"
ON products FOR ALL
USING (auth.role() = 'authenticated');
```

### 2. Brands Table (Optional for normalization)

```sql
-- Create brands table
CREATE TABLE brands (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  logo_url TEXT,
  description TEXT,
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Add brands
INSERT INTO brands (name, slug, logo_url, display_order) VALUES
  ('TKN', 'tkn', '/TKN.png', 1),
  ('HD', 'hd', '/HD_logo-removebg.png', 2),
  ('TD', 'td', '/TD no background.png', 3),
  ('Imperial', 'imperial', '/imperial-removebg-.png', 4),
  ('MB', 'mb', '/MB_W_background-remove.png', 5);

-- Enable RLS
ALTER TABLE brands ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access to brands"
ON brands FOR SELECT
USING (is_active = true);
```

### 3. Categories Table (Optional)

```sql
-- Create categories table
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL,
  brand_slug TEXT REFERENCES brands(slug),
  description TEXT,
  parent_category_id UUID REFERENCES categories(id),
  display_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
  UNIQUE(slug, brand_slug)
);

-- Enable RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Allow public read access to categories"
ON categories FOR SELECT
USING (is_active = true);
```

---

## Migration Steps

### Step 1: Create Tables in Supabase

1. Open your Supabase project dashboard
2. Go to **SQL Editor**
3. Copy and paste the SQL schema from above
4. Run the queries to create tables and indexes

### Step 2: Seed Initial Data

Create a migration file: `supabase/migrations/seed_products.sql`

```sql
-- Insert sample products from app/search/page.tsx
INSERT INTO products (name, brand, brand_slug, category, category_slug, description, image_url, tags, price, stock_quantity) VALUES
  ('Bagasse Hinged Clamshells', 'TKN', 'tkn', 'Hinged Clamshells', 'bagasse-hinged-clamshells', 'Eco-friendly bagasse hinged clamshells for hot and cold foods', '/TKN.png', ARRAY['clamshell', 'hinged', 'bagasse', 'eco-friendly', 'biodegradable'], 29.99, 500),
  ('MB Hinged Clamshells', 'MB', 'mb', 'Hinged Clamshells', 'hinged-clamshells', 'Durable hinged clamshells perfect for takeout', '/TKN.png', ARRAY['clamshell', 'hinged', 'takeout', 'food container'], 24.99, 300),
  -- Add all 43 products from the current array
  ('Kraft Boat Trays', 'TKN', 'tkn', 'Boat Trays', 'boat-trays', 'Kraft paper serving boats', '/TKN.png', ARRAY['boat', 'tray', 'kraft', 'paper', 'serving'], 15.99, 200);
```

### Step 3: Update Supabase Queries Helper

Edit `utils/supabase/queries.ts` and add:

```typescript
import { SupabaseClient } from '@supabase/supabase-js';

export interface Product {
  id: string;
  name: string;
  brand: string;
  brand_slug: string;
  category: string;
  category_slug: string;
  description: string;
  image_url: string;
  price: number;
  stock_quantity: number;
  sku?: string;
  tags: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

/**
 * Search products with filters
 */
export async function searchProducts(
  supabase: SupabaseClient,
  query: string,
  filters?: {
    brand?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
    inStock?: boolean;
  }
) {
  let queryBuilder = supabase
    .from('products')
    .select('*')
    .eq('is_active', true);

  // Text search on name and description
  if (query && query.trim()) {
    queryBuilder = queryBuilder.or(
      `name.ilike.%${query}%,description.ilike.%${query}%,tags.cs.{${query}}`
    );
  }

  // Apply filters
  if (filters?.brand && filters.brand !== 'all') {
    queryBuilder = queryBuilder.eq('brand_slug', filters.brand);
  }

  if (filters?.category) {
    queryBuilder = queryBuilder.eq('category_slug', filters.category);
  }

  if (filters?.minPrice) {
    queryBuilder = queryBuilder.gte('price', filters.minPrice);
  }

  if (filters?.maxPrice) {
    queryBuilder = queryBuilder.lte('price', filters.maxPrice);
  }

  if (filters?.inStock) {
    queryBuilder = queryBuilder.gt('stock_quantity', 0);
  }

  const { data, error } = await queryBuilder.order('name', { ascending: true });

  if (error) {
    console.error('Error searching products:', error);
    return [];
  }

  return data as Product[];
}

/**
 * Get all products (with optional pagination)
 */
export async function getProducts(
  supabase: SupabaseClient,
  page: number = 1,
  pageSize: number = 50
) {
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;

  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('name', { ascending: true })
    .range(from, to);

  if (error) {
    console.error('Error fetching products:', error);
    return [];
  }

  return data as Product[];
}

/**
 * Get product by ID
 */
export async function getProductById(supabase: SupabaseClient, id: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('id', id)
    .eq('is_active', true)
    .single();

  if (error) {
    console.error('Error fetching product:', error);
    return null;
  }

  return data as Product;
}

/**
 * Get products by brand
 */
export async function getProductsByBrand(supabase: SupabaseClient, brandSlug: string) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('brand_slug', brandSlug)
    .eq('is_active', true)
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching products by brand:', error);
    return [];
  }

  return data as Product[];
}

/**
 * Get products by category
 */
export async function getProductsByCategory(
  supabase: SupabaseClient,
  brandSlug: string,
  categorySlug: string
) {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('brand_slug', brandSlug)
    .eq('category_slug', categorySlug)
    .eq('is_active', true)
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching products by category:', error);
    return [];
  }

  return data as Product[];
}
```

### Step 4: Update Search Page

Convert `app/search/page.tsx` to server component with database queries:

```typescript
import { Suspense } from 'react';
import { createClient } from '@/utils/supabase/server';
import { searchProducts } from '@/utils/supabase/queries';
import SearchResultsClient from '@/components/ui/Search/SearchResultsClient';

// Server Component - fetches data
async function SearchResults({
  searchParams
}: {
  searchParams: { q?: string; brand?: string; sort?: string };
}) {
  const supabase = createClient();
  const query = searchParams.q || '';
  const brandFilter = searchParams.brand;

  // Fetch from database
  const products = await searchProducts(supabase, query, {
    brand: brandFilter
  });

  // Pass to client component for interactivity
  return (
    <SearchResultsClient
      initialProducts={products}
      initialQuery={query}
      initialBrand={brandFilter}
    />
  );
}

export default function SearchPage({
  searchParams
}: {
  searchParams: { q?: string; brand?: string; sort?: string };
}) {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <SearchResults searchParams={searchParams} />
    </Suspense>
  );
}
```

### Step 5: Create Client Component

Create `components/ui/Search/SearchResultsClient.tsx`:

```typescript
'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/utils/supabase/queries';
import Link from 'next/link';
import Image from 'next/image';

interface Props {
  initialProducts: Product[];
  initialQuery: string;
  initialBrand?: string;
}

export default function SearchResultsClient({
  initialProducts,
  initialQuery,
  initialBrand
}: Props) {
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [selectedBrand, setSelectedBrand] = useState(initialBrand || 'all');
  const [sortBy, setSortBy] = useState('relevance');

  // Client-side filtering and sorting logic
  useEffect(() => {
    let results = [...initialProducts];

    // Filter by brand
    if (selectedBrand !== 'all') {
      results = results.filter((p) => p.brand_slug === selectedBrand);
    }

    // Sort
    if (sortBy === 'name') {
      results.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'brand') {
      results.sort((a, b) => a.brand.localeCompare(b.brand));
    }

    setFilteredProducts(results);
  }, [selectedBrand, sortBy, initialProducts]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Same UI as current search page */}
      {/* ... rest of component */}
    </div>
  );
}
```

---

## Environment Variables

Update `.env.local` with Supabase connection:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

---

## Testing the Migration

1. **Test locally**:
   ```bash
   npm run dev
   ```

2. **Check Supabase logs** for any RLS policy issues

3. **Test search queries** with various terms

4. **Verify filtering and sorting** still work

---

## Performance Optimization

### 1. Enable Caching

```typescript
// Add revalidation to server component
export const revalidate = 3600; // Cache for 1 hour
```

### 2. Add Full-Text Search

```sql
-- Create full-text search index
CREATE INDEX idx_products_fts ON products
USING gin(to_tsvector('english', name || ' ' || description || ' ' || array_to_string(tags, ' ')));

-- Use in query
SELECT * FROM products
WHERE to_tsvector('english', name || ' ' || description || ' ' || array_to_string(tags, ' '))
  @@ to_tsquery('english', 'portion & cup');
```

### 3. Implement Pagination

```typescript
// Add pagination to queries
const PAGE_SIZE = 24;
const products = await searchProducts(supabase, query, filters, page, PAGE_SIZE);
```

---

## Admin Panel (Future Enhancement)

Create an admin page to manage products:

```typescript
// app/admin/products/page.tsx
'use client';

export default function AdminProducts() {
  // CRUD operations for products
  // - Create new products
  // - Edit existing products
  // - Delete products
  // - Bulk upload via CSV
  // - Manage inventory
}
```

---

## Rollback Plan

If database integration fails, you can always revert to hardcoded data:

1. Keep the current `app/search/page.tsx` version in git
2. Test database version thoroughly in development
3. Deploy to staging first
4. Monitor for errors before production deployment

---

## Summary

**Current State**: 43 hardcoded sample products  
**Next State**: Supabase database with full CRUD operations  
**Benefits**: 
- Scalable to thousands of products
- Real-time inventory management
- Admin panel for product management
- Better search performance with indexes
- Proper data relationships

**Timeline**:
- Database setup: 1-2 hours
- Data migration: 1 hour
- Code refactoring: 2-3 hours
- Testing: 2 hours
- **Total**: ~1 day of work
