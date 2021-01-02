import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { RATES } from '../exchangerate';
import { SharetokenService } from "../sharetoken.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
    rates = RATES;

    readonly TOTAL_URL = "https://forex-backend.mothermarycomesto.me/total";
    adat: any;

    constructor(private http: HttpClient, private router: Router, private tokenValue: SharetokenService) {
        this.http.get(this.TOTAL_URL).toPromise().then(data => {
            this.adat = data;
            console.log("??????????????????????", this.adat);
        });
    }

    ngOnInit(): void {
    }

}
