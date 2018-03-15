import {Component, Output, OnInit, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-contact-form-popup',
  templateUrl: './contact-form-popup.component.html',
  styleUrls: ['./contact-form-popup.component.less']
})
export class ContactFormPopupComponent implements OnInit {

  @Output() popupStatus = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  closePopup() {
    this.popupStatus.emit(false);
  }

}
