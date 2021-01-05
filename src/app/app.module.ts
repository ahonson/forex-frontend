import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CurrencyService } from "./currency.service";
import { SharetokenService } from "./sharetoken.service";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { DataComponent } from './data/data.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    DataComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
        {path: 'home', component: HomeComponent},
        {path: '', redirectTo: '/home', pathMatch: 'full'},
        {path: 'profile', component: ProfileComponent},
        {path: 'data', component: DataComponent},
        {path: 'transaction', component: TransactionComponent},
        {path: '**', component: PageNotFoundComponent} // this route has to come last
    ]),
  ],
  providers: [SharetokenService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
