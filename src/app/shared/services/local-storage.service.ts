import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setItem(key: string, item: object) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string): any {
    let item = localStorage.getItem(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  }
}
