import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ClientComponent } from './client/client.component';
import { SessionComponent } from './session/session.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import {AgGridModule} from 'ag-grid-angular';
import { DataGridComponent } from './data-grid/data-grid.component';
import { DataGridSubscriptionsComponent } from './data-grid-subscriptions/data-grid-subscriptions.component';
import { DataGridSessionsComponent } from './data-grid-sessions/data-grid-sessions.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClientComponent,
    SessionComponent,
    SubscriptionComponent,
    DataGridComponent,
    DataGridSubscriptionsComponent,
    DataGridSessionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
