import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewarrivalComponent } from './pages/newarrival/newarrival.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';


const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "Dashboard", component: DashboardComponent },
      { path: "newArrival", component: NewarrivalComponent },
      { path: "productInfo", component: ProductDetailsComponent },
      { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
    ],
    
  },
  // {
  //   path: "Products",
  //   component: LayoutComponent,
  //   children: [
      
      
  //   ],
    
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
