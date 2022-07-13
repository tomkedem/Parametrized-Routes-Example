import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  // {path: 'product/1', component: P1Component},
  // {path: 'product/2', component: P2Component}
  {path:'product/:id' , component:ProductComponent},
  {path:'product/:productId/photos/:photoId' , component:ProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
