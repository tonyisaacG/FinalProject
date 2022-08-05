import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { MakeordersComponent } from './makeorders/makeorders.component';
import { UpdataitemComponent } from './updataitem/updataitem.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path:'makeorders', component: MakeordersComponent },
  { path : 'items' , component: ItemsComponent},
  {path : 'additem', component : AddNewItemComponent },
  { path:'updateitem' ,component:UpdataitemComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
