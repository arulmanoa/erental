import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { provideRoutes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewarrivalComponent } from './pages/newarrival/newarrival.component';
import { SharedModule } from './shared/shared.module';
import { AccountModalComponent } from './shared/modals/account-modal/account-modal.component';
import { LocationModalComponent } from './shared/modals/location-modal/location-modal.component';
import { TrendingComponent } from './pages/trending/trending.component';
import { RecommendationComponent } from './pages/recommendation/recommendation.component';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewarrivalComponent,
    TrendingComponent,
    RecommendationComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule
  ],
  providers: [],
  exports: [
    AccountModalComponent,
    LocationModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
