import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharetokenService {

    private tokenValue = new BehaviorSubject('JWT!');
    currentToken = this.tokenValue.asObservable();

    constructor() { }

    changeToken(token: string) {
        this.tokenValue.next(token)
    }
}
