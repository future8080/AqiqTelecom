"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import { fetchProducts } from "@/lib/mock-products";
import { ProductCard } from "@/components/product-card";
import { ProductFilters } from "@/components/product-filters";
import { CartModal } from "@/components/cart-modal";
import { Pagination } from "@/components/pagination";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Loader2 } from 'lucide-react';

const ITEMS_PER_PAGE = 12;

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [cartOpen, setCartOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
  } = useCart();

  useEffect(() => {
    loadProducts();
  }, []);

  const loadProducts = async () => {
    setLoading(true);
    const data = await fetchProducts();
    setProducts(data);
    setLoading(false);
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesMinPrice = minPrice
      ? product.price >= parseInt(minPrice)
      : true;
    const matchesMaxPrice = maxPrice
      ? product.price <= parseInt(maxPrice)
      : true;
    return matchesSearch && matchesMinPrice && matchesMaxPrice;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, minPrice, maxPrice]);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Product Store</h1>
          <Button
            onClick={() => setCartOpen(true)}
            variant="outline"
            className="relative"
          >
            <ShoppingCart className="mr-2 h-5 w-5" />
            Cart
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                {totalItems}
              </span>
            )}
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-[280px_1fr] gap-8">
          {/* Filters Sidebar */}
          <aside className="md:sticky md:top-24 h-fit">
            <div className="border rounded-lg p-6 bg-card">
              <h2 className="text-lg font-semibold mb-4">Filters</h2>
              <ProductFilters
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                minPrice={minPrice}
                maxPrice={maxPrice}
                onMinPriceChange={setMinPrice}
                onMaxPriceChange={setMaxPrice}
              />
            </div>
          </aside>

          {/* Products Grid */}
          <main>
            <div className="mb-6">
              <h2 className="text-xl font-semibold">
                {loading
                  ? "Loading Products..."
                  : `${filteredProducts.length} Products Found ${totalPages > 1 ? `(Page ${currentPage} of ${totalPages})` : ''}`}
              </h2>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 className="h-12 w-12 animate-spin text-muted-foreground" />
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {paginatedProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={addToCart}
                    />
                  ))}
                </div>

                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </>
            )}

            {!loading && filteredProducts.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <p className="text-lg">No products found</p>
                <p className="text-sm mt-2">
                  Try adjusting your filters or search query
                </p>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Cart Modal */}
      <CartModal
        open={cartOpen}
        onOpenChange={setCartOpen}
        cart={cart}
        totalPrice={totalPrice}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClearCart={clearCart}
      />
    </div>
  );
}
