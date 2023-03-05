import { BuildoverviewComponent } from './buildoverview.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { BuildDetailsModule } from '../build-details/build-details.module';



@NgModule({
  declarations: [BuildoverviewComponent],
  imports: [
    CommonModule,
    MatTableModule,
    BuildDetailsModule
  ]
})
export class BuildsoverviewModule { }
