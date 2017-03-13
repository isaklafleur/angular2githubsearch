import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: string;
    private client_id = '3b147dde57d2ee2d7246';
    private client_secret = '3094a25c738c5eef6b71e56c94ff12d19e63dc64';

    constructor(private _http: Http) {
        console.log('Github Service Ready...');
        this.username = 'isaklafleur';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    updateUser(username:string) {
        this.username = username;
    }
}
