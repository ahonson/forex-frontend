# ForexFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.2.

## Redovisningstext för kmom10

I projektet använde jag mig i stort sett av samma teknologier som i tidigare kursmoment. På så sätt gick det att återanvända ganska mycket kod och struktur från me-sidan. När det gäller modulen `socket.io-client` märkte jag att den nyaste versionen (3.0.5) inte var kompatibel med arbetssättet jag ärvt från kmom05 och kmom06 så jag blev tvungen att använda v2.3.1 i stället.

Realtidsgraferna tog jag fram med hjälp av `chart.js` och `ng2-charts`. Den sistnämnda är en modul som är anpassad för Angular och bygger på `chart.js`. Graferna som skapas med dessa moduler är responsiva per automatik. För resten av applikationen använde jag mig av CSS (bl a mediaqueries) för att få till en responsiv layout. Jag strävade efter att skapa en användarvänlig webbplats med stora knappar och inputsfält samt en lättöverskådlig struktur.

Tack vare ett stort antal data-bindings och API-anrop känns det som att jag lyckats med att bygga en lättanvänd och levande applikation.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
