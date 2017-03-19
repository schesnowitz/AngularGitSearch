import {Injectable} from '@angular/core'; //helps with dependencies and dependency injection
import {Http, Headers} from '@angular/http' //allows us to make http get requests
// observable with reactive extentions return response as 
// oberbable and the we subscribe to that obervable
import 'rxjs/add/operator/map';

// injectable Decorator

@Injectable()
export class GithubService{
  private username: string;
  private client_id = 'ea8ed139b41dba5fb5fb';
  private client_secret = '3520849ecf917badfd025c0cffe7031045d4e9a0';

  constructor(private _http: Http) { //undersocre not needed but nice when creating service
    console.warn('github service ready...');
    this.username = 'schesnowitz'
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret) //to use http module we need to inject into constructor
      .map(res => res.json()) //returns observable in json format
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret) //to use http module we need to inject into constructor
      .map(res => res.json()) //returns observable in json format
  }  
}