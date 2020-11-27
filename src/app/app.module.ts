import { NgModule } from '@angular/core';
 import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppChildComponent } from './app-child/app-child.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, AppChildComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

