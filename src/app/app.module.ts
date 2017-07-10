import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { GetInvolvedFormComponent } from './get-involved/get-involved-form/get-involved-form.component';
import { PaypalComponent } from './get-involved/paypal/paypal.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'get-involved', component: GetInvolvedComponent }
  // { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GetInvolvedComponent,
    GetInvolvedFormComponent,
    PaypalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
