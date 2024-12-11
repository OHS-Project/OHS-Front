import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProviderLayoutComponent } from './provider-layout/provider-layout.component';
import { TransactionsComponent } from './components/transactions/transactions.component';

const routes: Routes = [
  {
    path: '',
    component: ProviderLayoutComponent,
    children: [
      {path: 'provider-dashboard', component: DashboardComponent},
      {path: 'provider-transactions', component: TransactionsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProviderRoutingModule { }
