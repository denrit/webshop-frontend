import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProcuctShopComponent } from './procuct-shop/procuct-shop.component';

const routes: Routes = [
  {path: '', component: ProcuctShopComponent},
  {path: 'cart', component: ShoppingCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
