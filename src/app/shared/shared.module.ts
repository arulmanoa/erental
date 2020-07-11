import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Injector, APP_INITIALIZER, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AccountModalComponent } from './modals/account-modal/account-modal.component';
import { LocationModalComponent } from './modals/location-modal/location-modal.component';




@NgModule({
  declarations: [
    AccountModalComponent,
    LocationModalComponent
  ],
  imports: [

    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  entryComponents: [
    AccountModalComponent,
    LocationModalComponent
  ],
  exports: [
    AccountModalComponent,
    LocationModalComponent
  ],
  providers: [


  ]


})
export class SharedModule { }
