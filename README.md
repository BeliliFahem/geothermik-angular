# GeothermikFrontAngular

This project was generated with ❤️ and [Angular CLI](https://github.com/angular/angular-cli) version 16.0.5.

This Web Application is a Kata Code (~exercise) where I put a maximum of craft. For full description of the Kata, please see the document **kata-geothermik.pdf**.

The Application consumes the REST API that is in the repository : https://gitlab.com/geothermik/geothermik-api

In this project are illustrated:

- Compliance with the DDD,
- DTO pattern,
- Use of OpenAPI Generator,
- Use of strict eslint rules,
- Material Design (Angular Material),
- Stryctly typed Reactive Forms,
- Sentry for application monitoring,
- GitFlow with conventional commits and git hooks,
- As well as other development best practices.

## Quick start

This is a quick start to run the app on your local machine.

```bash
$ npm install
# Generate the API Client based on the file 'openapi\geothermik-api.yaml'
$ npm run prepare
$ ng serve
# The API is reay on http://localhost:4200 !
```

Note: For full operation with front and back, you can simply launch the back application with just two instructions:

GitLab: https://gitlab.com/geothermik/geothermik-api#quick-start

GitHub: https://github.com/BeliliFahem/geothermik-api#quick-start

## First run

Generate the API Client based on the file 'openapi\geothermik-api.yaml'.

Run `npm run prepare`

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

## TODOs

- [ ] Better handle input errors on forms with messages
- [ ] Use Source Maps with Sentry
- [ ] Dockerize application
- [ ] Move @openapitools/openapi-generator-cli to docker container
- [ ] Separate the API client on it's own repository ?

--
Author - [Fahem BELILI](https://belilifahem.com)
