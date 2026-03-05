# Product List Feature - Implementation Guide

## Overview
The product list feature allows customers to create a list of products they're interested in, with size/quantity selections, and then contact you about those specific items. This replaces a traditional checkout since your business handles orders through direct contact.

## Features Implemented

### 1. List Context (`utils/listContext.tsx`)
- Manages the global list state using React Context
- Stores list items in localStorage for persistence
- Provides methods to add, remove, update, and clear list items
- Tracks total items in the list

### 2. List Page (`app/list/page.tsx`)
- Displays all items in the customer's list
- Shows product images, brand, size, and quantity
- Allows quantity adjustment and item removal
- Includes "Contact Us" CTA for customers to inquire about their list
- Shows empty state when no items are in the list

### 3. List Button in Navbar (`components/ui/Navbar/ListButton.tsx`)
- Icon button in the navbar next to "Contact Us"
- Shows badge with total item count
- Links to the list page

### 4. Add to List Button Component (`components/ui/AddToListButton/`)
- Reusable component for product pages
- Size selector dropdown (when sizes are available)
- Quantity selector with +/- buttons
- "Add to My List" button with success feedback
- Fully customizable per product

## How to Add "Add to List" to Any Product Page

### Step 1: Make the page a client component (if not already)
Add at the top of the file:
```tsx
'use client';
```

### Step 2: Import the AddToListButton component
```tsx
import AddToListButton from '@/components/ui/AddToListButton';
```

### Step 3: Add the button to your product layout
Place this in your product information section:

```tsx
<AddToListButton
  productName="Your Product Name"
  brand="BRAND_NAME"          // e.g., "MB", "HD", "TKN", etc.
  category="Category Name"     // e.g., "Hinged Clamshells"
  slug="product-slug"          // URL slug for the product
  brandSlug="brand-slug"       // URL slug for the brand
  image="/path/to/image.png"   // Product image path (optional)
  sizes={['6"', '8"', '9"']}   // Array of size options (optional)
  showSizeSelector={true}      // Show size dropdown (default: true)
/>
```

### Example Implementation

Here's how it was added to the MB PP Vented Black Clamshells page:

```tsx
<AddToListButton
  productName="PP Hinged Vented Clamshell Black"
  brand="MB"
  category="Hinged Clamshells"
  slug="pp-vented-black"
  brandSlug="mb"
  image="/MTC_MP_PP/MTC MB no bg pics/closed black no comp.png"
  sizes={sizeOptions.map(opt => `${opt.size} (${opt.itemNo})`)}
  showSizeSelector={true}
/>
```

### For Products Without Size Options

If a product doesn't have multiple sizes:

```tsx
<AddToListButton
  productName="Product Name"
  brand="BRAND"
  category="Category"
  slug="product-slug"
  brandSlug="brand-slug"
  image="/path/to/image.png"
  sizes={[]}                    // Empty array
  showSizeSelector={false}      // Hide size selector
/>
```

## Files Created/Modified

### New Files:
1. `utils/listContext.tsx` - List state management
2. `app/list/page.tsx` - List display page
3. `components/ui/Navbar/ListButton.tsx` - Navbar list icon button
4. `components/ui/AddToListButton/AddToListButton.tsx` - Reusable add button
5. `components/ui/AddToListButton/index.ts` - Export file

### Modified Files:
1. `app/layout.tsx` - Added ListProvider wrapper
2. `components/ui/Navbar/Navbar.tsx` - Added ListButton next to Contact
3. `app/category/mb/hinged-clamshells/pp-vented-black/page.tsx` - Example implementation

## User Flow

1. **Browse Products** → Customer views product pages
2. **Select Options** → Choose size and quantity
3. **Add to List** → Click "Add to My List" button
4. **View List** → Click list icon in navbar (shows item count badge)
5. **Review Items** → See all selected products with details
6. **Contact** → Click "Contact Us About This List" to inquire

## Data Structure

Each list item contains:
- `id`: Unique identifier
- `name`: Product name
- `brand`: Brand name (TKN, HD, TD, Imperial, MB)
- `category`: Product category
- `size`: Selected size (optional)
- `quantity`: Number of items
- `image`: Product image path (optional)
- `slug`: Product URL slug
- `brandSlug`: Brand URL slug

## Styling

The list feature uses your existing color scheme:
- Primary color: `#1c51a3`
- Hover color: `#153d7f`
- Consistent with your existing button styles

## Next Steps

To add the list feature to other product pages:

1. **Imperial Sushi Trays**: Add sizes like "Full Tray", "Half Tray", etc.
2. **HD Products**: Add container sizes
3. **TKN Paper Products**: Add sizes for bags, boxes, etc.
4. **TD Containers**: Add various size options

Simply follow the example in the MB PP Vented Black page and customize the props for each product!

## Testing

To test the feature:
1. Visit a product page with the AddToListButton
2. Select a size and quantity
3. Click "Add to My List"
4. See the navbar list icon badge increment
5. Click the list icon to view your list
6. Adjust quantities, remove items, or clear all
7. List persists across page refreshes (localStorage)
