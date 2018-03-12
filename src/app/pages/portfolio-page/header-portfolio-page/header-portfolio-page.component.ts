import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-portfolio-page',
  templateUrl: './header-portfolio-page.component.html',
  styleUrls: ['./header-portfolio-page.component.less']
})
export class HeaderPortfolioPageComponent implements OnInit {

  popupOpened = false;

  constructor() { }

  ngOnInit() {
  }


  openPopup() {
    console.log('popup Open');
    this.popupOpened = true;
  }


}
