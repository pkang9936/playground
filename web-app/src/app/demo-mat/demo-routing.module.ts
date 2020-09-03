import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ButtonsComponent} from './buttons.component';
import { FlexboxComponent } from './flexbox.component';

const routes: Routes = [
  {path:'buttons', component: ButtonsComponent},
  {path: 'flex', component: FlexboxComponent},
  {path:'**', redirectTo: 'buttons', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
