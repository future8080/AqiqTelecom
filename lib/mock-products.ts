import { Product } from "@/types/product";

const categories = [
  "Electronics",
  "Clothing",
  "Home & Kitchen",
  "Books",
  "Sports",
];

export function generateMockProducts(): Product[] {
  const products: Product[] = [];

  for (let i = 1; i <= 100; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 900) + 100,
      category: categories[Math.floor(Math.random() * categories.length)],
      image: `/placeholder.svg?height=300&width=300`,
      description: `High-quality product with excellent features. Perfect for your needs.`,
    });
  }

  return products;
}

// Simulate API call
export async function fetchProducts(): Promise<Product[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateMockProducts());
    }, 500);
  });
}
