import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RATES } from '../exchangerate';
// import {Pipe, PipeTransform} from '@angular/core';
import { SharetokenService } from "../sharetoken.service";

// @Pipe({
//     name: 'getRate',
//     pure: true
// })
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

    amount = 1;
    rates = RATES;
    currencies = [];
    currencynames = [];
    canbesold = [];
    adat: any;
    email = "";
    transactionPage = "sell";
    purch_amount: any;
    purch_currency = "";
    sold_amount = 1;
    sold_currency = "";
    user_id: any;
    token = "";
    userurl = "https://forex-backend.mothermarycomesto.me/users/";
    readonly TRANSACTIONS_URL = "https://forex-backend.mothermarycomesto.me/transactions";

    constructor(private http: HttpClient, private router: Router, private tokenValue: SharetokenService, private emailValue: SharetokenService) {
        this.emailValue.currentEmail.subscribe(email => this.email = email);
        this.http.get(this.userurl + this.email).toPromise().then(data => {
            this.adat = data;
            this.user_id = this.adat.id;
            this.currencies = [this.adat.chf, this.adat.eur, this.adat.gbp, this.adat.sek, this.adat.usd];
            this.currencynames = ["CHF", "EUR", "GBP", "SEK", "USD"];
            for (var i = 0; i < this.currencies.length; i++) {
                if (this.currencies[i] >= 0.01) {
                    this.canbesold.push(this.currencynames[i]);
                }
            }
            console.log(this.currencynames);
            console.log(this.canbesold);
        });
    }

    getRate(amount, purch, sold) {
        return (amount * purch / sold).toFixed(2);
    }

    transaction() {
        if (this.sold_amount > this.adat[this.sold_currency.toLowerCase()]) {
            console.log("You cannot sell more than you have.");
            return;
        }
        this.purch_amount = (this.sold_amount / Number(this.getRate(1, this.rates[this.purch_currency.toLowerCase()], this.rates[this.sold_currency.toLowerCase()]))).toFixed(2);

        this.http.post(this.TRANSACTIONS_URL, {
            token: this.token,
            user_id: this.user_id,
            purch_amount: this.purch_amount,
            sold_amount: this.sold_amount,
            sold_currency: this.sold_currency,
            purch_currency: this.purch_currency
        }).subscribe();
        this.router.navigate(['data']);
    }

    ngOnInit(): void {
        this.tokenValue.currentToken.subscribe(token => this.token = token);
        // this.emailValue.currentEmail.subscribe(email => this.email = email);
        if (this.token.length < 5) {
            this.router.navigate(['login']);
            console.log("CRUD.COMPONENT.JS, token:", this.token);
        }
    }
}
