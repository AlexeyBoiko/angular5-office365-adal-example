import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { } from 'adal';
import {Observable} from 'rxjs/Rx';
import { Subscriber } from 'rxjs/Subscriber';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AdalService {
  private _config: adal.Config;
  private _context: adal.AuthenticationContext;
  constructor(private http:HttpClient) {
    this._config = environment.adalConfig;
    this._context = new AuthenticationContext(this._config);
  }

  get config(): adal.Config {
    return this._config;
  }

  get context(): adal.AuthenticationContext {
    return this._context;
  }

  get isLogged(): boolean {
    const user = this._context.getCachedUser();
    const token = this._context.getCachedToken(this._config.clientId);
    return !!user && !!token;
  }

  private acquireToken(resource:string):Observable<any>{
    return new Observable<any>((subscriber: Subscriber<any>) => 
      this._context.acquireToken(resource, (message: string, token: string)=>{
        subscriber.next(token);
      })
    );
  }

  public get(resource:string, url:string):Observable<any>{
    return this.acquireToken(resource)
      .switchMap(token => this.http.get(url, { headers:{"Authorization": `Bearer ${token}`} })); 
  }
}
