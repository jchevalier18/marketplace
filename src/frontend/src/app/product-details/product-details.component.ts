import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "../products";
import { CartService } from "../cart.service";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;
  productId;
  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("Your product has been added to the cart!");
  }
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService
  ) {}
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.productId = params.get("productId");
      this.product = this.productService
        .getAll()
        .find(h => h.productId == this.productId);
    });
  }
}
