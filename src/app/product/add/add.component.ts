import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit{
  constructor(private fb: FormBuilder,
              private ps: ProductService,
              private router: Router){}

  addForm!: FormGroup;

  ngOnInit(){
    this.addForm = this.fb.group({
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
  return this.addForm.controls;
}

addProduct(){
  // console.log(this.addForm.value);
  this.ps.insert(this.addForm.value).subscribe(data => {
    this.router.navigate(['/products'])
  })
}
}
