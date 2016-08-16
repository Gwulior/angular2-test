/// <reference path="../typings/index.d.ts" />
import {AppComponent} from "./app.component";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from "@angular/forms";
import {HTTP_PROVIDERS} from "@angular/http";
import {APP_ROUTER_PROVIDERS} from "./app.routes";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {AuthService} from "./auth/auth.service";

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms(), AuthService, HTTP_PROVIDERS, APP_ROUTER_PROVIDERS,  {provide: LocationStrategy, useClass: HashLocationStrategy}]);

// todo change methods in bootstrap as in the end of https://docs.google.com/document/d/1RIezQqE4aEhBRmArIAS1mRIZtWFf6JxN_7B4meyWK0Y/pub
// we need {provide: LocationStrategy, useClass: HashLocationStrategy}, because standard pathLocationStrategy needs to be configured on http server,
// to redirect every request on basepath, in our case on '' or index.html,
// in the same time hashstrategy works like a charm and supported by any browser
