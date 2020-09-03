import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path :"customer", component: CustomerComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'material', loadChildren: () =>
    import('./demo-mat/demo.module').then(m => m.DemoModule)

  },
  {path:'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
