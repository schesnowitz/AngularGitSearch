import { Component } from '@angular/core';
import { GithubService } from "../services/github.service";

@Component({
  moduleId: module.id, 
  selector: 'profile',
  templateUrl: `profile.component.html`,
})
  export class ProfileComponent  { 
    user:any[]; //set user attributes to array
    repos:any[];
    constructor(private _githubService: GithubService){
          //here we log the user info in console--> 
      this._githubService.getUser().subscribe(user => {
        this.user = user; //get user attributes from array
      });

      this._githubService.getRepos().subscribe(repos => {
        this.repos = repos; //get user attributes from array 
      });
    }

 }
