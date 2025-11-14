"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from 'lucide-react';

interface ProductFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  minPrice: string;
  maxPrice: string;
  onMinPriceChange: (price: string) => void;
  onMaxPriceChange: (price: string) => void;
}

export function ProductFilters({
  searchQuery,
  onSearchChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
}: ProductFiltersProps) {
  return (
    <div className="space-y-6">
      <div>
        <Label htmlFor="search" className="text-sm font-medium mb-2 block">
          Search Products
        </Label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            id="search"
            type="text"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-9"
          />
        </div>
      </div>

      <div>
        <Label className="text-sm font-medium mb-3 block">Price Range</Label>
        <div className="flex gap-4">
          <div className="flex-1">
            <Label htmlFor="min-price" className="text-xs text-muted-foreground">
              Min Price
            </Label>
            <Input
              id="min-price"
              type="number"
              placeholder="$0"
              value={minPrice}
              onChange={(e) => onMinPriceChange(e.target.value)}
              min="0"
            />
          </div>
          <div className="flex-1">
            <Label htmlFor="max-price" className="text-xs text-muted-foreground">
              Max Price
            </Label>
            <Input
              id="max-price"
              type="number"
              placeholder="$1000"
              value={maxPrice}
              onChange={(e) => onMaxPriceChange(e.target.value)}
              min="0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
