import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Auth } from '../models/auth.module';
import { User } from '../models/user.module';

import { TokenService } from './token.service';

import { tap,switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'https://young-sands-07814.herokuapp.com/api/auth';

  constructor(
    private http:HttpClient,
    private tokenService :TokenService
  ) { }

  login(email:string, password:string){
    return this.http.post<Auth>(`${this.apiUrl}/login`,{email,password})
    .pipe(
      //*before response
      tap(response => this.tokenService.saveToken(response.access_token))
    );
  }

  getProfile(/* token:string */){
    return this.http.get<User>(`${this.apiUrl}/profile`)
      /* headers:{
          Authorization: `Bearer${token}`
      } */
  }

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      //*after login
      switchMap(() => this.getProfile()),
    )
  }

  logout(){
    this.tokenService.removeToken()
  }
  /* login(){
    this.AuthService.loginAndGet('gato@h.com','122')
    .subscribe(user => {
      this.profile = user;
    })
  }

  logout(){
    this.AuthService.logout()
    this.profile = null
    this.router.navigate(['home'])
  }*/


  /* <button *ngIf="!profile; else elseBlock">Login</button>
  <ng-template #elseBlock>{{profile?.email}}</ng-template>
  profile: User = {
    id: '',
    email: '',
    password: '',
    name: ''
  }
  or profile: User | null = null;
*/
}
