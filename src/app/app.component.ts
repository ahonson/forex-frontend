import { Component } from '@angular/core';
import { SharetokenService } from "./sharetoken.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'forex-frontend';
    token = "";

    constructor(private tokenValue: SharetokenService) {

    }

    ngOnInit(): void {
        this.tokenValue.currentToken.subscribe(token => this.token = token);
        if (this.token.length < 5) {
            this.token = "";
        }
    }

    logout() {
        this.token = "";
    }
}
