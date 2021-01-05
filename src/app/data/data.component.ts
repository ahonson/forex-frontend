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
    // earlierMessages: string[] = [];
    currentValues: any;
    readonly TOTAL_URL = "https://forex-backend.mothermarycomesto.me/total";
    adat: any;

    constructor(private http: HttpClient, private router: Router, private tokenValue: SharetokenService, private currencyService: CurrencyService) {
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
    ngOnInit() {
        this.currencyService
        .currentRates()
        .subscribe((message) => {
            this.currentValues = message;
        });
    }
}
