"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/types/product";
import { Minus, Plus, Trash2 } from 'lucide-react';
import Image from "next/image";

interface CartModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  cart: CartItem[];
  totalPrice: number;
  onUpdateQuantity: (productId: number, quantity: number) => void;
  onRemove: (productId: number) => void;
  onClearCart: () => void;
}

export function CartModal({
  open,
  onOpenChange,
  cart,
  totalPrice,
  onUpdateQuantity,
  onRemove,
  onClearCart,
}: CartModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] flex flex-col">
        <DialogHeader>
          <DialogTitle>Shopping Cart ({cart.length} items)</DialogTitle>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 border rounded-lg"
                >
                  <div className="relative w-20 h-20 flex-shrink-0 bg-muted rounded">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold truncate">{item.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {item.category}
                    </p>
                    <p className="text-lg font-bold mt-1">${item.price}</p>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => onRemove(item.id)}
                      className="h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity - 1)
                        }
                        className="h-8 w-8"
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          onUpdateQuantity(item.id, item.quantity + 1)
                        }
                        className="h-8 w-8"
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <DialogFooter className="flex flex-col sm:flex-row gap-4 sm:justify-between border-t pt-4">
          <div className="flex flex-col gap-1">
            <span className="text-sm text-muted-foreground">Total Amount</span>
            <span className="text-3xl font-bold">${totalPrice}</span>
          </div>
          <div className="flex gap-2">
            {cart.length > 0 && (
              <Button variant="outline" onClick={onClearCart}>
                Clear Cart
              </Button>
            )}
            <Button disabled={cart.length === 0}>Checkout</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
