# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.0.

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


# Angular 14 project 

# serve your application with nvm and local Angular CLI
nvm exec npm start
# create an Angular component using local Angular CLI
nvm exec npm run ng g component my-cool-component

# Using multiple angular cli versions
https://levelup.gitconnected.com/how-to-run-multiple-node-and-angular-versions-simultaneously-1f58e6d150de

==========
in root of project directory, to run project in specific node version
echo "16.14.0" > .nvmrc

https://www.sharepointcafe.net/2023/02/can-we-install-multiple-versions-of-angular-on-a-single-system.html

# 👇️ delete node_modules and package-lock.json
rm -rf node_modules
rm -f package-lock.json

# 👇️ clean npm cache
npm cache clean --force

npm install
