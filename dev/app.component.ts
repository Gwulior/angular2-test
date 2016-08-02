import {Component} from "@angular/core";
import {HttpService} from "./http.service";
import {stringify} from "@angular/upgrade/src/util";



@Component({
  selector: 'app',
  template: `<div>
  <div class="input">
    <label for="title">Title</label>
    <input type="text" id="title" #title>
  </div>
  <div class="input">
    <label for="body">Body</label>
    <input type="text" id="body" #body/>
  </div>
  <div class="input">
    <label for="user-id">User id</label>
    <input type="text" id="user-id" #userId/>
  </div>
  <button (click)="onPost(title.value, body.value, userId.value)">Post Data</button>
  <button (click)="onGetPosts()">Get all Posts</button>
  <p>Response: {{response | json}}</p>
</div>`,
  providers : [HttpService]
})
export class AppComponent {
  response:string;


    constructor(private httpService : HttpService) {
    }

    onGetPosts() {
      this.httpService.getPosts().subscribe(
        res => this.response = res,
        error => console.log(error)
      )

    }
      onPost(title:string, body:string, userId:string) {
        this.httpService.createPost({
          title : title,
          body:body,
          userId : +userId
        }).subscribe(
          resp => this.response = resp,
          error => console.log(error)
        )
      }

}
