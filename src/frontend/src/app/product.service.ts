import { Injectable } from "@angular/core";
import { Product } from "./products";

@Injectable()
export class ProductService {
  constructor() {}
  products: Product[] = [
    {
      productId: 20,
      name: "Phone XL",
      price: 799,
      description: "A large phone with one of the best screens"
    },
    {
      productId: 21,
      name: "Phone Mini",
      price: 699,
      description: "A great phone with one of the best cameras"
    },
    {
      productId: 22,
      name: "Phone Standard",
      price: 299,
      description: "A standard phone for a standard user"
    },
    {
      productId: 23,
      name: "Phone Krup",
      price: 99,
      description: "Do not even consider buying this"
    }
  ];

  getAll(): Product[] {
    return this.products;
  }
}
