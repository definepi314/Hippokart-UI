import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {

  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer ' + sessionStorage.getItem('auth_token')
    })
  };

  constructor(private http: HttpClient) { }

  public getToken(fakeUser) {
    console.log('fake user', fakeUser);
    return this.http.post(`${environment.baseUrl}/authenticate`, fakeUser)
      .pipe(
        map(data => {
          console.log('response from add user', data);
          return data;
        }),
        catchError(this.handleError)
      );
}

  public adduser(details) {
      console.log('details of user got', details);
      return this.http.post(`${environment.baseUrl}/addUser`, details, this.httpOptions)
        .pipe(
          map(data => {
            console.log('response from add user', data);
            return data;
          }),
          catchError(this.handleError)
        );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Server error');
  }
}
