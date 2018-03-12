import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-form-popup',
  templateUrl: './contact-form-popup.component.html',
  styleUrls: ['./contact-form-popup.component.less']
})
export class ContactFormPopupComponent implements OnInit {

  @Input() popupOpened;

  constructor() { }

  ngOnInit() {
  }

  closePopup() {
    this.popupOpened = false;
  }

}
