import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/models/product.model';
import { MyValidators } from 'src/app/utils/validators';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss'],
})
export class ProductFormComponent implements OnInit {
  id: string;
  productForm = this.fb.group({
    id: [null],
    title: [null, Validators.required],
    price: [0, [Validators.required, MyValidators.isPriceValid]],
    description: [null, Validators.required],
    image: 'assets/images/hoodie.png',
  });

  images: string[] = [
    'assets/images/hoodie.png',
    'assets/images/camiseta.png',
    'assets/images/mug.png',
    'assets/images/pin.png',
    'assets/images/stickers1.png',
    'assets/images/stickers2.png',
  ];

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.id = params.id;
        this.loadForm();
      }
    });
  }

  loadForm() {
    this.productsService.getProduct(this.id).subscribe((product) => {
      this.productForm.patchValue(product);
    });
  }

  onSubmit(event) {
    event.preventDefault();
    if (this.id) {
      this.updateProduct();
      return;
    }
    this.createProduct();
  }

  createProduct() {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      this.productsService.createProduct(product).subscribe((rta) => {
        alert(`Thanks! Producto creado`);
        this.router.navigate(['admin/products']);
      });
    }
  }

  updateProduct() {
    if (this.productForm.valid) {
      const product: Partial<Product> = this.productForm.value;
      this.productsService.updateProduct(this.id, product).subscribe((rta) => {
        alert(`Thanks! Producto modificado`);
        this.router.navigate(['admin/products']);
      });
    }
  }
}
