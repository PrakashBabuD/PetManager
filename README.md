# PetManager

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.8.

Application is deployed and is available at http://petmanagerapp.azurewebsites.net .

It is Single Page Application developed using Angular 10.0.8.

## Responsive 
It is a responsive application which shows data in2 columns for large screens and in a single column for smaller screen like mobile 

![Desktop Resolution](https://petmanager.s3-ap-southeast-2.amazonaws.com/pet-manager_tablet_resolution.PNG)

![Mobile Resolution](https://petmanager.s3-ap-southeast-2.amazonaws.com/pet-manager_mobile_resolution.PNG)

## Unite testing 

This appliation consists of units tests for all the  components, pipes and services. It has very good coverage by covering all the core functionality of the app. 
Please find the report below:

![Code Coverage](https://petmanager.s3-ap-southeast-2.amazonaws.com/code-coverage.PNG)

## Architecure 
Application consits of root module(appmodule), two feature modules,shared module and services.
Feature modules conists of code related to displaying lists.
Shared modules conists of reusable components like pipes which can be used in other feature modules.
Services are kept in folder called "services" and provided directly in appmodule. (This can also be part of the core module).


## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
