import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';

const Routes: Routes = [
  {path:'', component: ContactmanagerAppComponent,
  children:[
      {path: ':id', component: MainContentComponent},
      {path: '', component: MainContentComponent}
    ]
  },
  {path:'**', redirectTo:''}
]
@NgModule({
  declarations: [ContactmanagerAppComponent, ToolbarComponent, MainContentComponent, SidenavComponent,
     NotesComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(Routes),
    FlexLayoutModule,
    FormsModule,
    MaterialModule
  ],

})
export class ContactmanagerModule { }
