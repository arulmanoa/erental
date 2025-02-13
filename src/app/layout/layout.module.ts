import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';


@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class LayoutModule { }
