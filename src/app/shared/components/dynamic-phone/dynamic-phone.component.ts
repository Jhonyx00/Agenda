import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-phone',
  templateUrl: './dynamic-phone.component.html',
  styleUrls: ['./dynamic-phone.component.css'],
})
export class DynamicPhoneComponent {
  phoneIndex!: number;
  constructor() {}
}
