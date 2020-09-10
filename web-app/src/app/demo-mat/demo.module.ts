import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule} from '@angular/flex-layout';
import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons.component';
import { MaterialModule } from '../shared/material/material.module';
import { FlexboxComponent } from './flexbox.component';


@NgModule({
  declarations: [
    ButtonsComponent,
    FlexboxComponent
  ],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class DemoModule { }
