import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaveRockComponent } from './cave-rock.component';
import { RouterModule, Routes } from '@angular/router';


const Routes: Routes = [
  {
    path: '', component: CaveRockComponent
  }
];
@NgModule({
  declarations: [CaveRockComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(Routes)
  ]
})
export class CaveRockModule { }
