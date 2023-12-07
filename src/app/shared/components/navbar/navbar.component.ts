import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserInfoService } from '../../services/userInfo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private userInfoService: UserInfoService,
    private router: Router
  ) {}

  mainMenu: {
    defaulOptions: Array<any>;
  } = { defaulOptions: [] };

  ngOnInit(): void {
    this.mainMenu.defaulOptions = [
      {
        name: 'home',
        icon: '',
        router: ['/', 'auth'],
      },
      {
        name: 'contacts',
        icon: '',
        router: ['/', 'contacts-list'],
      },
      {
        name: 'about',
        icon: '',
        router: ['/', 'about'],
      },
    ];
    this.initUserInfo();
  }

  // goTo($event: any) {
  //   const route = $event.target.textContent;

  //   if (route == 'about') {
  //     this.router.navigate(['/', 'about']);
  //   } else if (route == 'contacts') {
  //     this.router.navigate(['/', 'contacts-list']);
  //   }
  // }

  private userString: string | null = null;
  public user!: User;

  public initUserInfo() {
    this.userInfoService.currentUser.subscribe({
      next: (userData) => {
        this.user = userData;
        this.userString = sessionStorage.getItem('user');
        if (this.userString != null) {
          this.user = JSON.parse(this.userString);
        }
      },
      error: (error) => {
        console.log('Hubo un problema con los datos del usuario', error);
      },
    });
  }
}
