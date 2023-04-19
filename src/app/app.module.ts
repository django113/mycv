import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {HttpClientModule} from "@angular/common/http";
import {PorfolioService} from "./services/porfolio.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { YearFilterPipe } from './year-filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    YearFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [PorfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
