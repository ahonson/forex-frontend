// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class CurrencyService {
//
//   constructor() { }
// }

// import * as io from 'socket.io-client';
import {io} from 'socket.io-client/build/index';
import { Observable } from 'rxjs';

export class CurrencyService {
    // private url = 'http://localhost:3000';
    private url = 'https://forex-socket.mothermarycomesto.me/';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    // public sendMessage(message) {
    //     this.socket.emit('chat message', message);
    // }
    //
    // public getMessages = () => {
    //     return Observable.create((observer) => {
    //         this.socket.on('chat message', (message) => {
    //             observer.next(message);
    //         });
    //     });
    // }
    //
    // public earlierMessages = () => {
    //     return Observable.create((observer) => {
    //         this.socket.on('earlier chat', (message) => {
    //             observer.next(message);
    //         });
    //     });
    // }

    public currentRates = () => {
        return Observable.create((observer) => {
            this.socket.on('current rates', (message) => {
                observer.next(message);
            });
        });
    }
}
