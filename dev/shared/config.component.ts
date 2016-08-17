import {RequestOptions, Headers} from "@angular/http";
/**
 * Created by gwuli on 17.08.2016.
 */

export const basePath: string = 'http://localhost:8080/';
export const baseImagePath: string = basePath + 'image/one/';
export const headers: Headers = new Headers({
  'Content-Type': 'application/json'
});
export const reqOptions: RequestOptions = new RequestOptions({
  withCredentials: true
});
export const reqOptionsJson: RequestOptions = new RequestOptions({
  withCredentials: true,
  headers: this.headers
});
