import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharetokenService {

    private tokenValue = new BehaviorSubject('JWT!');
    private emailValue = new BehaviorSubject('email!');
    currentToken = this.tokenValue.asObservable();
    currentEmail = this.emailValue.asObservable();

    constructor() { }

    changeToken(token: string) {
        this.tokenValue.next(token)
    }

    changeEmail(email: string) {
        this.emailValue.next(email)
    }
}
