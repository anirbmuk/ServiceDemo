import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OneComponent } from './pages/one/one.component';
import { TwoComponent } from './pages/two/two.component';

import { GlobalService } from './services/global.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule
  ],
  providers: [GlobalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
