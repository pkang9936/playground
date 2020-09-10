import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { FlexLayoutModule} from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactmanagerAppComponent } from './contactmanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
import { NotificationComponent } from './components/panel/notification.component';
import { UserDataService} from './data/user-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

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
     NotesComponent,
    NewContactDialogComponent,
    NotificationComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(Routes),
    InMemoryWebApiModule.forRoot(UserDataService, {
      passThruUnknownUrl: true
    }),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents:[
    NewContactDialogComponent
  ]

})
export class ContactmanagerModule { }
