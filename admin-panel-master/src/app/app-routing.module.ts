import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PurchasesComponent } from './purchases/purchases.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // {path:'purchases',component:PurchasesComponent},
  // {path:'items',component:ItemsComponent},
  // {path:'consumption',component:ConsumptionComponent},
  // {path:'add-user',component:AddUserComponent},
  {path:'navbar',component:NavbarComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
