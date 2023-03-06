import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { BuildsoverviewModule } from './buildsPage/features/buildoverview/buildoverview.module';
import { BuildDetailsComponent } from './buildsPage/features/build-details/build-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule, 
    MatButtonModule,
    BuildsoverviewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
