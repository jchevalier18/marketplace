import { Component, OnInit } from "@angular/core";
import { ProductService } from "../product.service";
import { Product } from "../products";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent {
  constructor(private productService: ProductService, protected http: HttpClient) {
    this.products = this.productService.getAll();
  }
  products: Product[] = [];
  clima: any;
  ngOnInit():void {

    this.http.get<any>("weatherforecast").subscribe(data => {
      this.clima = data;
    });

  }
  share() {
    window.alert("The product has been shared!");
  }
  onNotify() {
    window.alert("You will be notified when the product goes on sale");
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
