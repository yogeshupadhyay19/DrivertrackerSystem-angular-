import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material';

import {DemoMaterialModule} from './material-module';
import { LoginformComponent } from './loginform/loginform.component';
import { CreatedriveComponent } from './createdrive/createdrive.component';
import { ViewdriveComponent } from './viewdrive/viewdrive.component';
import {Routes, RouterModule} from '@angular/router';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { SignupComponent } from './signup/signup.component';
import { UpdatedriveComponent } from './updatedrive/updatedrive.component';

const approute:Routes=[
{path:'login',component:LoginformComponent,pathMatch:"full"},

{path:'Menu',component:MainNavComponent,
children:[
  {path:'home',component:CreatedriveComponent},
  {path:'view',component:ViewdriveComponent}
]
},
{path:'update',component:UpdatedriveComponent},
{path:'signup',component:SignupComponent,pathMatch:"full"},
{path:"",redirectTo:'/login', pathMatch:"full"}
];

@NgModule({
  declarations: [
    AppComponent,

    LoginformComponent,
    CreatedriveComponent,
    ViewdriveComponent,
    MainNavComponent,
    SignupComponent,
    UpdatedriveComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot(approute),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
