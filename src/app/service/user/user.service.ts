import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = JSON.parse(localStorage.getItem("user"));

  public getUser() :Object{
    return this.user;
  }
  public getUserId() :number{
    return this.user.id;
  }

  public getUserName() : String{
    return this.user.name;
  }
}
