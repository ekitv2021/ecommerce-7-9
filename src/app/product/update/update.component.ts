import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  constructor(private fb: FormBuilder,
    private ps: ProductService,
    private router: Router,
    private route: ActivatedRoute){}

  updateForm!: FormGroup;
  product$!: Observable<Product>;
  productId!: number;

  ngOnInit(){
    this.productId = this.route.snapshot.params['id']
    this.product$ = this.ps.getOne(this.productId);
    
    this.updateForm = this.fb.group({
      name: ['',{
        validators: [Validators.required]
      }],
      price: ['',{
        validators: [Validators.required, Validators.min(100)]
      }],
      code: ['',{
        validators: [Validators.required]
      }],
      isAvailable:[true,{
        validators: [Validators.required]
      }],
      description:[],
      image:['/assets/images/lgtv.png'],
      manufacturedDate: [new Date().toISOString()]
    });
  }

  get f(){
    return this.updateForm.controls;
  }

  updateProduct(){
    this.ps.update(this.productId, this.updateForm.value).subscribe(data => {
      this.router.navigate(['/products']);
    });    
  }
}
