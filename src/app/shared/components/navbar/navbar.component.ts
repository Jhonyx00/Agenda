import { Component, OnInit } from '@angular/core';
import { LocalStorageCache } from '@auth0/auth0-angular';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.initUserInfo();
  }

  private userString: string | null = null;
  public user!: User;

  public initUserInfo() {
    this.userString = sessionStorage.getItem('user');
    if (this.userString != null) {
      this.user = JSON.parse(this.userString);
    }
  }
}
