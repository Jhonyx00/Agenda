import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-phone',
  templateUrl: './dynamic-phone.component.html',
  styleUrls: ['./dynamic-phone.component.css'],
})
export class DynamicPhoneComponent {
  phoneIndex!: number;

  @Input() phoneControl!: FormControl;
  @Input() phoneGroup!: FormGroup;
  constructor() {}
}
