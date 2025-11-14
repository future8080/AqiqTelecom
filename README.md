# Product Store - React E-Commerce Application

A complete e-commerce product listing application built with Next.js and React, featuring product filtering, search, and shopping cart functionality.

## Features

- **Product Listing**: Display 100 mock products with images, names, prices, and categories
- **Search**: Filter products by name with real-time search
- **Price Range Filter**: Filter products by minimum and maximum price
- **Shopping Cart**:
  - Add products to cart
  - View and edit cart in a modal
  - Update quantities
  - Remove items
  - Calculate total price
  - Persistent cart storage (localStorage)

## Installation & Setup

### Prerequisites

- Node.js 18+ installed on your system

### Steps

1. **Extract the ZIP file** to your desired location

2. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser** and navigate to:
   \`\`\`
   http://localhost:3000
   \`\`\`

## Technical Stack

- **Framework**: Next.js 15 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Type Safety**: TypeScript
- **State Management**: React Hooks (useState, useEffect)
- **Data Persistence**: localStorage

## Project Structure

\`\`\`
├── app/
│ ├── page.tsx # Main page with product listing
│ ├── layout.tsx # Root layout
│ └── globals.css # Global styles and theme
├── components/
│ ├── product-card.tsx # Individual product card
│ ├── product-filters.tsx # Search and price filters
│ ├── cart-modal.tsx # Shopping cart modal
│ └── ui/ # shadcn/ui components
├── hooks/
│ └── use-cart.ts # Custom hook for cart management
├── lib/
│ └── mock-products.ts # Mock data and API simulation
├── types/
│ └── product.ts # TypeScript interfaces
└── README.md
\`\`\`

## Technical Decisions

### Why These Technologies?

1. **Next.js App Router**: Modern React framework with server and client components, providing optimal performance and developer experience

2. **Custom Hook for Cart State**: The `use-cart` hook encapsulates all cart logic, making it reusable and AqiqTelecomable. Uses localStorage for persistence across sessions

3. **Mock API with Simulated Delay**: The `fetchProducts` function simulates a real API call with a 500ms delay, demonstrating proper loading states

4. **Tailwind CSS**: Utility-first CSS framework for rapid UI development with consistent design

5. **shadcn/ui Components**: Pre-built, accessible components that can be customized and don't add unnecessary bundle size

### Key Implementation Details

- **Filtering Logic**: All filters work together (search + price range) for refined results
- **Cart Persistence**: Cart data is saved to localStorage automatically whenever it changes
- **Responsive Design**: Mobile-first approach with responsive grid layouts
- **Type Safety**: Full TypeScript coverage for better developer experience and fewer bugs

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

Modern browsers with ES6+ support:

- Chrome (laAqiqTelecom)
- Firefox (laAqiqTelecom)
- Safari (laAqiqTelecom)
- Edge (laAqiqTelecom)

---

Developed as a technical assessment project
