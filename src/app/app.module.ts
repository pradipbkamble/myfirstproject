import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { SkillsetsComponent } from './skillsets/skillsets.component';
import { TabsComponent } from './tabs/tabs.component';









@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    SkillsetsComponent,
    TabsComponent,
    

   
  
  
     

    
  ],
  imports: [
    BrowserModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
