import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GcNavComponent } from './gc-nav/gc-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { FlexLayoutModule, ObservableMedia } from '@angular/flex-layout';
import {
  MatCardModule,
  MatToolbarModule,
  MatButtonModule,
  MatGridListModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatStepperModule
} from '@angular/material';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from  '@angular/common/http';

import { VegetableComponent } from './vegetable/vegetable.component';
import { FruitComponent } from './fruit/fruit.component';
import { OtherComponent } from './other/other.component';
import { ItemsComponent } from './items/items.component';
import { ItemComponent } from './item/item.component';
import { CartComponent } from './cart/cart.component';
import { UserComponent } from './user/user.component';
import { OtpComponent } from './otp/otp.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service'
import { APIService } from './api.service'


@NgModule({
  declarations: [
    AppComponent,
    GcNavComponent,
    VegetableComponent,
    FruitComponent,
    OtherComponent,
    ItemsComponent,
    ItemComponent,
    CartComponent,
    UserComponent,
    OtpComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    LayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatStepperModule
  ],
  providers: [APIService, CookieService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
