# Similar Products Feature - Implementation Guide

## Overview
The Similar Products section displays related product suggestions below the "Want to place an order?" banner on product category pages.

---

## ✅ Already Implemented On:
- `/category/tkn/bagasse-hinged-clamshells/page.tsx`

---

## How to Add to Other Product Pages

### Step 1: Import the Components

Add these imports at the top of your product page:

```tsx
import SimilarProducts from '@/components/ui/SimilarProducts';
import { getSuggestedProducts } from '@/utils/suggestedProducts';
```

### Step 2: Add the Component

Place this code **after** the "Want to place an order?" banner, **before** the closing `</div>` tags:

```tsx
{/* Similar Products Section */}
<SimilarProducts
  currentBrand="BRAND_NAME"
  currentCategory="Category Name"
  products={getSuggestedProducts('brand-slug', 'category-slug')}
  maxProducts={4}
/>
```

### Step 3: Replace Placeholders

Replace the following values:

- `BRAND_NAME`: The brand name (e.g., "TKN", "HD", "Imperial", "MB", "TD")
- `Category Name`: The full category name (e.g., "Bagasse Hinged Clamshells")
- `'brand-slug'`: The brand slug in lowercase (e.g., `'tkn'`, `'hd'`, `'imperial'`, `'mb'`, `'td'`)
- `'category-slug'`: The category slug from the URL (e.g., `'bagasse-hinged-clamshells'`)

---

## Complete Examples for Each Brand

### TKN Products

#### Bagasse Hinged Clamshells (✅ Already Done)
```tsx
<SimilarProducts
  currentBrand="TKN"
  currentCategory="Bagasse Hinged Clamshells"
  products={getSuggestedProducts('tkn', 'bagasse-hinged-clamshells')}
  maxProducts={4}
/>
```

#### Bagasse Clamshells
```tsx
<SimilarProducts
  currentBrand="TKN"
  currentCategory="Bagasse Clamshells"
  products={getSuggestedProducts('tkn', 'bagasse-clamshells')}
  maxProducts={4}
/>
```

#### Bio Boxes
```tsx
<SimilarProducts
  currentBrand="TKN"
  currentCategory="Bio Boxes"
  products={getSuggestedProducts('tkn', 'bio-boxes')}
  maxProducts={4}
/>
```

#### Boat Trays
```tsx
<SimilarProducts
  currentBrand="TKN"
  currentCategory="Boat Trays"
  products={getSuggestedProducts('tkn', 'boat-trays')}
  maxProducts={4}
/>
```

#### Chopsticks
```tsx
<SimilarProducts
  currentBrand="TKN"
  currentCategory="Chopsticks"
  products={getSuggestedProducts('tkn', 'chopsticks')}
  maxProducts={4}
/>
```

#### Food Pails
```tsx
<SimilarProducts
  currentBrand="TKN"
  currentCategory="Food Pails"
  products={getSuggestedProducts('tkn', 'food-pails')}
  maxProducts={4}
/>
```

#### Napkins & Paper Towels
```tsx
<SimilarProducts
  currentBrand="TKN"
  currentCategory="Napkins & Paper Towels"
  products={getSuggestedProducts('tkn', 'napkins-papertowels')}
  maxProducts={4}
/>
```

#### Paper Bags
```tsx
<SimilarProducts
  currentBrand="TKN"
  currentCategory="Paper Bags"
  products={getSuggestedProducts('tkn', 'paper-bags')}
  maxProducts={4}
/>
```

#### Portion Cups
```tsx
<SimilarProducts
  currentBrand="TKN"
  currentCategory="Portion Cups"
  products={getSuggestedProducts('tkn', 'portion-cups')}
  maxProducts={4}
/>
```

#### Portion Cup Lids
```tsx
<SimilarProducts
  currentBrand="TKN"
  currentCategory="Portion Cup Lids"
  products={getSuggestedProducts('tkn', 'portion-cup-lids')}
  maxProducts={4}
/>
```

---

### HD Products

#### REROBOX
```tsx
<SimilarProducts
  currentBrand="HD"
  currentCategory="REROBOX"
  products={getSuggestedProducts('hd', 'rerobox')}
  maxProducts={4}
/>
```

#### Clipin
```tsx
<SimilarProducts
  currentBrand="HD"
  currentCategory="Clipin"
  products={getSuggestedProducts('hd', 'clipin')}
  maxProducts={4}
/>
```

#### V-Series
```tsx
<SimilarProducts
  currentBrand="HD"
  currentCategory="V-Series"
  products={getSuggestedProducts('hd', 'v-series')}
  maxProducts={4}
/>
```

#### Deli Containers
```tsx
<SimilarProducts
  currentBrand="HD"
  currentCategory="Deli Containers"
  products={getSuggestedProducts('hd', 'deli-containers')}
  maxProducts={4}
/>
```

#### Meat Trays
```tsx
<SimilarProducts
  currentBrand="HD"
  currentCategory="Meat Trays"
  products={getSuggestedProducts('hd', 'meat-trays')}
  maxProducts={4}
/>
```

#### Soup Containers
```tsx
<SimilarProducts
  currentBrand="HD"
  currentCategory="Soup Containers"
  products={getSuggestedProducts('hd', 'soup-containers')}
  maxProducts={4}
/>
```

---

### Imperial Products

#### Sushi Trays
```tsx
<SimilarProducts
  currentBrand="Imperial"
  currentCategory="Sushi Trays"
  products={getSuggestedProducts('imperial', 'sushi-tray')}
  maxProducts={4}
/>
```

#### Bento Boxes
```tsx
<SimilarProducts
  currentBrand="Imperial"
  currentCategory="Bento Boxes"
  products={getSuggestedProducts('imperial', 'bento')}
  maxProducts={4}
/>
```

#### Poke Bowls
```tsx
<SimilarProducts
  currentBrand="Imperial"
  currentCategory="Poke Bowls"
  products={getSuggestedProducts('imperial', 'pokebowl')}
  maxProducts={4}
/>
```

---

### TD Products

#### Plastic Containers
```tsx
<SimilarProducts
  currentBrand="TD"
  currentCategory="Plastic Containers"
  products={getSuggestedProducts('td', 'plastic-containers')}
  maxProducts={4}
/>
```

#### Soup Containers
```tsx
<SimilarProducts
  currentBrand="TD"
  currentCategory="Soup Containers"
  products={getSuggestedProducts('td', 'soup-containers')}
  maxProducts={4}
/>
```

---

### MB Products

#### Hinged Clamshells
```tsx
<SimilarProducts
  currentBrand="MB"
  currentCategory="Hinged Clamshells"
  products={getSuggestedProducts('mb', 'hinged-clamshells')}
  maxProducts={4}
/>
```

---

## Full Page Example

Here's a complete example of what your product page should look like:

```tsx
import Image from 'next/image';
import Link from 'next/link';
import SimilarProducts from '@/components/ui/SimilarProducts';
import { getSuggestedProducts } from '@/utils/suggestedProducts';

export default function ProductPage() {
  // ... your size options and other code ...

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* ... breadcrumbs, product info, sizes grid ... */}

        {/* Contact Banner */}
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Want to place an order or have any product questions?
          </h3>
          <p className="text-gray-600 mb-4">
            Contact us for bulk orders or custom sizing options.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#1c51a3] text-white px-6 py-3 rounded-md hover:bg-[#153d7f] transition-colors font-medium"
          >
            Contact Us
          </Link>
        </div>

        {/* Similar Products Section - ADD THIS */}
        <SimilarProducts
          currentBrand="BRAND_NAME"
          currentCategory="Category Name"
          products={getSuggestedProducts('brand-slug', 'category-slug')}
          maxProducts={4}
        />
      </div>
    </div>
  );
}
```

---

## Customization Options

### Change Number of Products
Default is 4 products. To show more or fewer:

```tsx
<SimilarProducts
  currentBrand="TKN"
  currentCategory="Bio Boxes"
  products={getSuggestedProducts('tkn', 'bio-boxes', 6)} // Show 6 products
  maxProducts={6}
/>
```

### Update Suggested Products
Edit `utils/suggestedProducts.ts` to change which products are suggested for each category. The file is organized with clear sections for each brand and category.

---

## Features

✅ **Responsive Design**: Works on mobile, tablet, and desktop  
✅ **Hover Effects**: Cards scale and show shadows on hover  
✅ **Brand Badges**: Each product displays its brand  
✅ **Tag Display**: Shows up to 3 relevant tags per product  
✅ **Smart Links**: Each card links to the actual product page  
✅ **Clean Layout**: 4-column grid on desktop, adapts to smaller screens  

---

## Testing

After adding the component to a page:

1. Save the file
2. Visit the product page in your browser
3. Scroll down past the "Want to place an order?" banner
4. You should see a "Similar Products You May Like" section with 4 product cards
5. Click on any card to navigate to that product's page

---

## Need Help?

If a product category doesn't have suggested products yet:

1. Open `utils/suggestedProducts.ts`
2. Find the `allProducts` object
3. Add a new entry following the existing pattern
4. Use the format: `'brand-slug-category-slug': [...]`

Example:
```typescript
'tkn-new-category': [
  {
    name: 'Related Product Name',
    brand: 'TKN',
    brandSlug: 'tkn',
    categorySlug: 'related-category',
    description: 'Brief description',
    image: '/demo.png',
    tags: ['tag1', 'tag2', 'tag3']
  },
  // ... more products
]
```
