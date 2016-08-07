/// <reference path="../typings/index.d.ts" />
import {AppComponent} from "./app.component";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {HTTP_PROVIDERS} from "@angular/http";
import {APP_ROUTER_PROVIDERS} from "./app.routes";

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), HTTP_PROVIDERS, APP_ROUTER_PROVIDERS]);

//todo change methods in bootstrap as in the end of https://docs.google.com/document/d/1RIezQqE4aEhBRmArIAS1mRIZtWFf6JxN_7B4meyWK0Y/pub
