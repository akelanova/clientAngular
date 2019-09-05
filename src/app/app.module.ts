import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {CardComponent} from './card/card.component';
import {ReviewerComponent} from './reviewer/reviewer.component';
import {LabelComponent} from './label/label.component';
import {ValueComponent} from './value/value.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CardComponent,
    ReviewerComponent,
    LabelComponent,
    ValueComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
