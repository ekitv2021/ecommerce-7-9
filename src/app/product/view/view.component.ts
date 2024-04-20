import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit{

  product$!: Observable<Product>;
  productId!: number;

  constructor(private ps: ProductService,
              private route: ActivatedRoute,
              private router: Router
  ){}

  goBack(){
    this.router.navigate(['/products']);
  }
  
  ngOnInit(){
    this.productId = this.route.snapshot.params['id']
    this.product$ = this.ps.getOne(this.productId);
  }
}
