/// <reference path="../typings/index.d.ts" />
import {AppComponent} from "./app.component";
import {bootstrap} from "@angular/platform-browser-dynamic";
import {LoggingService} from "./services/logging.service";
import {DataService} from "./services/data.service";

bootstrap(AppComponent, [DataService]);
