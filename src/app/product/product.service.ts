import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  //CRUD Operations
  //Reading
  //Read All - get
  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  //Read One - get
  getOne(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }


  //Creating - post
  insert(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiUrl}/products`, 
                                    JSON.stringify(product),
                                    this.httpOptions);
  }

  //Updating - put
  update(id: number, product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`,
                                    JSON.stringify(product),
                                    this.httpOptions);
  }

  //Deleting - delete
  delete(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.apiUrl}/products/${id}`)
  }
}
