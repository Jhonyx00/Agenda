import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user';
import { UserInfoService } from '../../services/userInfo.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private userInfoService: UserInfoService) {}
  ngOnInit(): void {
    this.initUserInfo();
  }

  private userString: string | null = null;
  public user!: User;

  public initUserInfo() {
    this.userInfoService.currentUser.subscribe({
      next: (userData) => {
        if (userData) {
          this.user = userData;
          this.userString = sessionStorage.getItem('user');
          if (this.userString != null) {
            this.user = JSON.parse(this.userString);
          }
        }
      },
    });
  }
}
