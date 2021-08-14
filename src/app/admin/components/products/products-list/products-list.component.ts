import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  products: Product[] = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts().subscribe((products) => {
      this.products = products;
    });
  }

  addProduct() {
    this.router.navigate(['admin/products/create']);
  }

  updateProduct(id: string) {
    this.router.navigate([`admin/products/edit/${id}`]);
  }

  deleteProduct(id: string) {
    this.productsService.deleteProduct(id).subscribe((response) => {
      // alert('Deleted!');
      this.fetchProducts();
    });
  }
}
