import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SharetokenService } from "../sharetoken.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    submitted = false;
    loginPage = "login";
    email = "";
    password = "";
    response: any;
    token: string;
    errormsg = "";
    errormsg2 = "";
    readonly USERS_URL = "https://forex-backend.mothermarycomesto.me/users/";
    readonly LOGIN_URL = "https://forex-backend.mothermarycomesto.me/login";
    readonly REGISTER_URL = "https://forex-backend.mothermarycomesto.me/register";
    // readonly TOTAL_URL = "https://forex-backend.mothermarycomesto.me/total";
    // adat: any;

    constructor(private http: HttpClient, private router: Router, private tokenValue: SharetokenService, private emailValue: SharetokenService) {
        // this.http.get(this.TOTAL_URL).toPromise().then(data => {
        //     this.adat = data;
        //     console.log("??????????????????????", this.adat);
        // });
    }


    onSubmit() {
        this.submitted = true;
        console.log("hejhopp");
    }

    login() {
        console.log("login - hejhopp");
        this.submitted = true;

        console.log(this.email);
        console.log(this.password);

        this.http.post(this.LOGIN_URL, {
            email: this.email,
            password: this.password
        }).subscribe(data => {
            this.response = data;
            this.token = this.response.data.token;
            console.log("TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT");
            console.log(this.response);
            console.log(this.token);
            this.tokenValue.changeToken(this.token);
            if (this.token.length > 4) {
                this.emailValue.changeEmail(this.email);
                this.router.navigate(['profile']);
            } else {
                this.errormsg = "Ogiltiga inloggningsuppgifter.";
            }
        });
    }

    register() {
        console.log("register - hejhopp");
        this.submitted = true;

        console.log(this.email);
        console.log(this.password);

        this.http.get(this.USERS_URL + this.email).toPromise().then(data => {
            if (data["id"]) {
                this.errormsg2 = "Denna epostadress är redan registrerad.";
            } else {
                this.http.post(this.REGISTER_URL, {
                    email: this.email,
                    password: this.password
                }).subscribe(data => {});
                this.router.navigate(['profile']);
            }
        });
    }

    ngOnInit() {
        this.tokenValue.currentToken.subscribe(token => this.token = token);
        console.log("LOGIN.COMPONENT.JS, token:", this.token);
    }
}
