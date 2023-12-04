import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor() {}
  private userSource = new BehaviorSubject<any>(null);
  currentUser = this.userSource.asObservable();

  changeUserData(data: any) {
    sessionStorage.setItem('user', JSON.stringify(data));
    this.userSource.next(data);
  }
}
