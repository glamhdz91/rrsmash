import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoundrobinRoutingModule } from './roundrobin-routing.module';
import { RoundrobinContainerComponent } from './roundrobin-container/roundrobin-container.component';
import { RoundrobinComponent } from './roundrobin/roundrobin.component';
import { MatInputModule, MatOptionModule, MatSelectModule, MatIconModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
  declarations: [RoundrobinContainerComponent, RoundrobinComponent],
  imports: [
    CommonModule,
    RoundrobinRoutingModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RoundrobinModule { }
