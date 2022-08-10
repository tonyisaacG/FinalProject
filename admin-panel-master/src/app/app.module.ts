


import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { PurchasesComponent } from './purchases/purchases.component';
import { MatSliderModule } from '@angular/material/slider';
import { ItemsComponent } from './items/items.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { ModalTypeComponent } from './modal-type/modal-type.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './add-user/add-user.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { ConsumptionmodalComponent } from './modals/consumptionmodal/consumptionmodal.component';
import { OrderesmodalComponent } from './modals/orderesmodal/orderesmodal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { CardsComponent } from './cards/cards.component';
import { PannerComponent } from './panner/panner.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    PurchasesComponent,
    ItemsComponent,
    ConsumptionComponent,
    ModalTypeComponent,
    AddUserComponent,
    AddModalComponent,
    ConsumptionmodalComponent,
    OrderesmodalComponent,
    NavbarComponent,
    LandingPageComponent,
    AboutComponent,
    CardsComponent,
    PannerComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSliderModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    NgbModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
