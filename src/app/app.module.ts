import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { VegetableComponent } from './components/vegetable/vegetable.component';
import { FruitComponent } from './components/fruit/fruit.component';
import { OtherComponent } from './components/other/other.component';
import { ItemsComponent } from './components/items/items.component';
import { ItemComponent } from './components/item/item.component';
import { CartComponent } from './components/cart/cart.component';
import { UserComponent } from './components/user/user.component';
import { OtpComponent } from './components/otp/otp.component';
import { AuthGuard } from './guards/auth.guard';
import { TokenInterceptor } from './interceptors/token-interceptor';
import { APIService } from './services/api.service';
import { GcNavComponent } from './components/gc-nav/gc-nav.component';
import { FormsModule } from '@angular/forms';


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
    MatStepperModule,
    FormsModule
  ],
  providers: [
    APIService,
    CookieService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
