import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChangeColorDirective } from './directives/change-color/change-color.directive';
import { HomeComponent } from './components/home/home.component';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import { AllowOnlyNumbersDirective } from './directives/allow-only-numbers/allow-only-numbers.directive';
import { RequiredDirective } from './directives/required/required.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChangeColorDirective,
    HomeComponent,
    AllowOnlyNumbersDirective,
    RequiredDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
