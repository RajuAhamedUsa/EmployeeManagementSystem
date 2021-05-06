import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddEditEmpComponent } from './components/add-edit-emp/add-edit-emp.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { SearchEmpPipe } from './search/search-emp.pipe';

@NgModule({
  declarations: [
    AppComponent,HomePageComponent, AddEditEmpComponent, SearchEmpPipe,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
