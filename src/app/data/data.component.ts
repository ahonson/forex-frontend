import { Component } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { RATES } from '../exchangerate';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CurrencyService } from '../currency.service';
import { SharetokenService } from "../sharetoken.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent {
    // readonly TOTAL_URL = "https://forex-backend.mothermarycomesto.me/total";
    // adat: any;
    token = "";
    email = "xx";
    rates = RATES;
    barChartOptions: ChartOptions = {
        responsive: true,
        scales : {
          yAxes: [{
             ticks: {
                max : 14,
                min: 0
              }
          }]
        }
    };
  barChartLabels: Label[] = ['CHF', 'EUR', 'GBP', 'USD'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: [9.32, 10.06, 11.13, 8.20], label: 'Major currencies based on SEK' }
  ];
  barChartColors: Color[] = [
          {
              borderColor: 'black',
              backgroundColor: ['#f70000', '#00208f', '#f6f6f6', '#030303'],
          },
      ];


      lineChartData: ChartDataSets[] = [
        { data: [9.32, 9.41, 9.63, 9.48, 9.56, 9.38, 9.39, 9.26, 9.23, 9.15], label: 'CHF vs SEK over time' },
      ];

      lineChartLabels: Label[] = ['12:06:00', '12:06:05', '12:06:10', '12:06:15', '12:06:20', '12:06:25', '12:06:30', "12:06:35", '12:06:40', "12:06:45"];

      lineChartOptions = {
        responsive: true,
      };

      lineChartColors: Color[] = [
        {
          borderColor: 'black',
          backgroundColor: 'rgba(255,255,0,0.28)',
        },
      ];

      lineChartLegend = true;
      lineChartPlugins = [];
      lineChartType = 'line';

      constructor(private http: HttpClient, private router: Router, private tokenValue: SharetokenService, private emailValue: SharetokenService) {

          // this.currencyService.
          // currentRates()
          // .subscribe((message) => {
          //     console.log("..........................");
          //     console.log(typeof message);
          //     console.log(message);
          //     console.log("::::::::::::::::::::::::::");
          //     this.currentValues = message;
          // });

          // this.http.get(this.TOTAL_URL).toPromise().then(data => {
          //     this.adat = data;
          // });
      }

      ngOnInit(): void {
          this.tokenValue.currentToken.subscribe(token => this.token = token);
          this.emailValue.currentEmail.subscribe(email => this.email = email);
          if (this.token.length < 5) {
              this.router.navigate(['home']);
              console.log("CRUD.COMPONENT.JS, token:", this.token);
          }
          // this.currencyService.currentRates().subscribe((message) => {
          //     this.currentValues = message;
          // });
      }
}
