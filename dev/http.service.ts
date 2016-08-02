/**
 * Created by gwuli on 02.08.2016.
 */
import { Injectable } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Observable} from "rxjs/Rx";
import 'rxjs/Rx'

@Injectable()
export class HttpService {

    constructor(private http:Http) { }

    getPosts():Observable<any> {
      return this.http.get('http://jsonplaceholder.typicode.com/posts')
        .map( resp => resp.json())
    }

    createPost(post : {title:string, body:string, userId:number}): Observable<any> {
      const body = JSON.stringify(post);
      let headers = new Headers();
      headers.append("Content-Type", "application/x-www-urlencoded");
      return this.http.post('http://jsonplaceholder.typicode.com/posts', body, {
        headers : headers
      }).map(res => res.json());

    }

}
