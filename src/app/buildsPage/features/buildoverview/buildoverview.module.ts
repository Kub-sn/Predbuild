import { BuildoverviewComponent } from './buildoverview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [BuildoverviewComponent],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class BuildsoverviewModule { }
