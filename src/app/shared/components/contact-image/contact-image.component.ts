import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-image',
  templateUrl: './contact-image.component.html',
  styleUrls: ['./contact-image.component.css'],
})
export class ContactImageComponent {
  @Input('img') set img(newImage: { url: string; width: number }) {
    this.image = newImage.url;
    this.width = newImage.width;
  }

  image: string = '';
  width: number = 0;
  defaultImgUrl: string = '';
}
