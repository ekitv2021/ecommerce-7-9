import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductModule } from './product/product.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: 'products', loadChildren: () =>
                        import('./product/product.module').then(m => 
                          m.ProductModule
                        )
  },
  { path: '', component: HomeComponent, title: 'Home'}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    // ProductModule //This is for eager loading
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
