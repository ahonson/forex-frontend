// import {io} from 'socket.io-client/build/index';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

export class CurrencyService {
    // private url = 'http://localhost:3001';
    private url = 'https://forex-socket.mothermarycomesto.me/';
    private socket;

    constructor() {
        this.socket = io(this.url);
    }

    public currentRates = () => {
        return Observable.create((observer) => {
            this.socket.on('current rates', (message) => {
                observer.next(message);
            });
        });
    }

    public earlierMessages = () => {
        return Observable.create((observer) => {
            this.socket.on('earlier chat', (message) => {
                observer.next(message);
            });
        });
    }
}
