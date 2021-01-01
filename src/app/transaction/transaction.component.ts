import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharetokenService } from "../sharetoken.service";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

    currencies = [];
    currencynames = [];
    canbesold = [];
    adat: any;
    email = "";
    transactionPage = "sell";
    purch_amount: any;
    purch_currency: any;
    sold_amount: any;
    sold_currency: any;
    user_id: any;
    token = "";
    userurl = "https://forex-backend.mothermarycomesto.me/users/";
    readonly TRANSACTIONS_URL = "https://forex-backend.mothermarycomesto.me/transactions";

    constructor(private http: HttpClient, private router: Router, private tokenValue: SharetokenService, private emailValue: SharetokenService) {
        this.emailValue.currentEmail.subscribe(email => this.email = email);
        this.http.get(this.userurl + this.email).toPromise().then(data => {
            this.adat = data;
            this.currencies = [this.adat.chf, this.adat.eur, this.adat.gbp, this.adat.sek, this.adat.usd];
            this.currencynames = ["CHF", "EUR", "GBP", "SEK", "USD"];
            for (var i = 0; i < this.currencies.length; i++) {
                if (this.currencies[i] > 0) {
                    this.canbesold.push(this.currencynames[i]);
                }
            }
            console.log(this.currencynames);
            console.log(this.canbesold);


        });
    }

    transaction() {
        console.log("halitrans", this.purch_amount);
        this.http.post(this.TRANSACTIONS_URL, {
            token: this.token,
            user_id: this.user_id,
            purchamount: this.purch_amount,
            soldamount: this.sold_amount,
            soldcurrency: this.sold_currency,
            purchcurrency: this.purch_currency
        }).subscribe();
    }

    ngOnInit(): void {
    }

}
