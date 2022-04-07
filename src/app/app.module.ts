import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { FeatureModule } from './feature/feature.module';

import { DashboardModule } from './feature/components/dashboard/dashboard.module';
import { LayoutModule } from './layout/layout.module';
import { RedElDirective } from './red-el.directive';
import { CustomPipe } from './custom.pipe';
import { DashboardComponent } from './feature/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    RedElDirective,
    CustomPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FeatureModule,
    DashboardModule,
    LayoutModule,

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
