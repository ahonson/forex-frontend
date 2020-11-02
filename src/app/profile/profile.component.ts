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

    readonly USER_URL = "https://forex-backend.mothermarycomesto.me/users/a@b.com";
    adat: any;

    constructor(private http: HttpClient, private router: Router, private tokenValue: SharetokenService) {
        this.http.get(this.USER_URL).toPromise().then(data => {
            this.adat = data;
            console.log("??????????????????????", this.adat);
        });
    }

    ngOnInit(): void {
    }

}
