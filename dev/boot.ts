/// <reference path="../typings/index.d.ts" />
import {AppComponent} from "./app.component";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {disableDeprecatedForms, provideForms} from '@angular/forms';

bootstrap(AppComponent, [disableDeprecatedForms(), provideForms()]);

//todo change methods in bootstrap as in the end of https://docs.google.com/document/d/1RIezQqE4aEhBRmArIAS1mRIZtWFf6JxN_7B4meyWK0Y/pub
