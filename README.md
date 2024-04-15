# BooksInsta

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.1. It was created with the purpose of learning behavioral design patterns.

## Implemented patterns:

- ### Strategy (used for sorting / filtering the quotes)

The blueprint for the sorting/ filtering strategy is the `QuotesSortingInterface`, while the classes in `quotesSortingStrategy.ts` define different sorting / filtering strategies. The `QuotesService` has a method that handles the selection and application of sorting strategies which is then used in the `QuotesListComponent`.

- ### Mediator (allow different components to keep track of the user status via a service)

Use a `BehaviorSubject` in the `AuthService` to allow components to access the user status without communicating with eachother.

- ### Chain of Responsibility (pass requests along a chain of handlers)

Add a guard for the `user-space` route, as a handler in the chain for page navigation.

- ### Observer (unsubscribe from subscriptions)

Create a `UnsubscribeService` which implements an interface that has methods for adding / removing subscriptions. In components, we can call the service to keep track of the subsctiptions & unsubscribe from each of them once the component is destroyed.

- ### State (create app themes states and toggle them)

Create interface, abstract class & concrete classes to store the theme state and be able to change it (`themeState.ts`). Use the respective interface & state in the `ThemeService` for exposing concrete methods to be used in the `app.component.ts`.

## To run the project locally:

## Clone & install

Run `git clone https://github.com/odile-ww/books-insta.git`, then `npm i`.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
