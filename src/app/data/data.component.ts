import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RATES } from '../exchangerate';
import { CurrencyService } from '../currency.service';
import { SharetokenService } from "../sharetoken.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
    rates = RATES;
    token = "";
    email = "xx";
    // earlierMessages: string[] = [];
    currentValues = "";
    readonly TOTAL_URL = "https://forex-backend.mothermarycomesto.me/total";
    adat: any;

    constructor(private http: HttpClient, private router: Router, private tokenValue: SharetokenService, private emailValue: SharetokenService, private currencyService: CurrencyService) {
        console.log("WWWWWWWWWWWWWWWWWWWWWWWWWWW");

        this.currencyService.
        currentRates()
        .subscribe((message) => {
            console.log("..........................");
            console.log(typeof message);
            console.log(message);
            console.log("::::::::::::::::::::::::::");
            this.currentValues = message;
            // for (var i = 0; i < message.length; i++) {
            //     this.earlierMessages.push("[kl " + message[i].time + "] " + message[i].name + " skrev: " + message[i].msg);
            // }
        });



        this.http.get(this.TOTAL_URL).toPromise().then(data => {
            this.adat = data;
            console.log("??????????????????????", this.adat);
        });
    }

    // ngOnInit() {
    // }
    //
    ngOnInit(): void {
        this.tokenValue.currentToken.subscribe(token => this.token = token);
        this.emailValue.currentEmail.subscribe(email => this.email = email);
        if (this.token.length < 5) {
            this.router.navigate(['home']);
            console.log("CRUD.COMPONENT.JS, token:", this.token);
        }

        this.currencyService.currentRates().subscribe((message) => {
            this.currentValues = message;
        });
    }
}
