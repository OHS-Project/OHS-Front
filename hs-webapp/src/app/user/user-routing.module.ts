import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: '',
    component: UserLayoutComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'about', component: AboutComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
