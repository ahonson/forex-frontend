import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CurrencyService } from '../currency.service';
import { SharetokenService } from "../sharetoken.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
    // earlierMessages: string[] = [];
    chosen_currency = "chf";
    currentValues = [9.32, 10.06, 11.13, 8.20];
    token = "";
    email = "xx";
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
        { data: this.currentValues, label: 'Major currencies based on SEK' }
    ];
    barChartColors: Color[] = [
          {
              borderColor: 'black',
              backgroundColor: ['#f70000', '#00208f', '#f6f6f6', '#030303'],
          },
      ];


      lineChartData: ChartDataSets[] = [
        { data: [9.32, 9.41, 9.63, 9.48, 9.56, 9.38, 9.39, 9.26, 9.23, 9.15], label: this.chosen_currency.toUpperCase() + ' vs SEK over time' },
      ];

      lineChartLabels: Label[] = ['12:06:00', '12:06:05', '12:06:10', '12:06:15', '12:06:20', '12:06:25', '12:06:30', "12:06:35", '12:06:40', "12:06:45"];

      lineChartOptions = {
        responsive: true,
        scales : {
          yAxes: [{
             ticks: {
                max : 13,
                min: 6
              }
          }]
        }
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

      constructor(private http: HttpClient, private router: Router, private tokenValue: SharetokenService, private emailValue: SharetokenService, private currencyService: CurrencyService) {

          this.currencyService.
          currentRates()
          .subscribe((message) => {
              console.log(".........XXX.................");
              console.log(typeof message);
              console.log(message);
              console.log("::::::::::::XXX::::::::::::::");
              this.currentValues = [message[0]["chf"], message[0]["eur"], message[0]["gbp"], message[0]["usd"]];
              this.barChartData[0]["data"] = this.currentValues;
              var tempdata = [];
              var templabels = [];

              for (var i = message.length -1; i >= 0; i--) {
                  tempdata.push(message[i][this.chosen_currency]);
                  templabels.push(message[i]["rate_date"].substr(11));
              }
              this.lineChartData = [{ data: tempdata, label: this.chosen_currency.toUpperCase() + ' vs SEK over time'}];
              console.log(this.lineChartData["data"]);

              this.lineChartLabels = templabels;
          });
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
