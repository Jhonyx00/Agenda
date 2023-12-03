import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor() {}

  getKey(key: string): string | null {
    return localStorage.getItem(key);
  }
  setKey(key: string, value: string) {
    localStorage.setItem(key, value);
  }
}
