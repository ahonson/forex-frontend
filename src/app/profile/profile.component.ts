import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharetokenService } from "../sharetoken.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    amount = 500;
    user_id = 3;
    token = "";
    email = "xx";
    payments: any;
    transactions: any;
    // readonly USER_URL = "https://forex-backend.mothermarycomesto.me/users/a@b.com";
    userurl = "https://forex-backend.mothermarycomesto.me/users/";
    paymentsurl = "https://forex-backend.mothermarycomesto.me/payments/";
    transactionsurl = "https://forex-backend.mothermarycomesto.me/transactions/";
    readonly ADDTOBALANCE_URL = "https://forex-backend.mothermarycomesto.me/addtobalance";
    adat: any;

    constructor(private http: HttpClient, private router: Router, private tokenValue: SharetokenService, private emailValue: SharetokenService) {
        this.emailValue.currentEmail.subscribe(email => this.email = email);
        this.http.get(this.userurl + this.email).toPromise().then(data => {
            this.adat = data;
            this.user_id = this.adat.id;
            this.http.get(this.transactionsurl + this.user_id).toPromise().then(data => {
                this.transactions = data;
            });
            this.http.get(this.paymentsurl + this.user_id).toPromise().then(data => {
                this.payments = data;
            });
        });
    }

    addtobalance() {
        console.log("haliho", this.amount);
        this.http.post(this.ADDTOBALANCE_URL, {
            amount: this.amount,
            token: this.token,
            user_id: this.user_id
        }).subscribe();
    }

    ngOnInit(): void {
        this.tokenValue.currentToken.subscribe(token => this.token = token);
        this.emailValue.currentEmail.subscribe(email => this.email = email);
        if (this.token.length < 5) {
            this.router.navigate(['home']);
            console.log("CRUD.COMPONENT.JS, token:", this.token);
        }
    }
}
