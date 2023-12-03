import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css'],
})
export class ContactInfoContainerComponent implements OnInit {
  ngOnInit(): void {
    this.displayContactInfo();
  }

  private userString: string | null = null;
  public contact: any;

  public displayContactInfo() {
    this.userString = localStorage.getItem('contact');
    if (this.userString != null) {
      this.contact = JSON.parse(this.userString);
      console.log(this.contact);
    }
  }
}
