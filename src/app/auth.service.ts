import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user_data') as string);
    console.log(user);
    return user !== null ? true : false;
  }
}
