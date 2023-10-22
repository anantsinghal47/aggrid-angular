import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClient } from '@angular/common/http'
import { HttpClientModule } from '@angular/common/http';


import 'ag-grid-enterprise';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

console.log('AgGridModule', AgGridModule);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule
    // HttpClient
  ],
  // providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
