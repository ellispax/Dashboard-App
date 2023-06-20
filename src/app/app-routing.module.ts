import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CustomizationsListComponent } from './components/customizations-list/customizations-list.component';
import { UsersComponent } from './components/users/users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { CreateCustomizationComponent } from './components/create-customization/create-customization.component';

const routes: Routes = [
  {path: "", component: DashboardComponent},
  {path: "Dashboard", component:DashboardComponent},
  {path: "Orders", component:OrdersComponent},
  {path: "create-product", component:CreateProductComponent},
  {path: "create-user", component:CreateUserComponent},
  {path: "create-customization", component:CreateCustomizationComponent},
  {path: "product-list", component:ProductListComponent},
  {path: "customizations-list", component:CustomizationsListComponent},
  {path: "users", component:UsersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
