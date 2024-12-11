import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './components/home/home.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { AboutComponent } from './components/about/about.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserLayoutComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
