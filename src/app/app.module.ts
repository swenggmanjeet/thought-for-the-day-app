// modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

// components
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component'

@NgModule({
  imports:      [ BrowserModule, NgbModule ],
  declarations: [ AppComponent, CarouselComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
