import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IndexDataPagesService } from '../../elements/cell-elem-index/indexDataPages.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.less']
})

export class IndexPageComponent implements OnInit, AfterViewInit {

  public keys;
  public pages;
  public status;
  public content;

  constructor(private indexData: IndexDataPagesService) {}

  ngOnInit() {

    this.pages = this.indexData.getData();
    this.keys = Object.keys(this.pages);

    this.content = this.indexData.getContent();

  }

  ngAfterViewInit() { // TODO right
    let counter = 0;
    const content = this.content;

    $('app-cell-elem').each(function () {
      if (content[counter].content === 'false') {
        $(this).addClass('empty');
      }
      counter++;
    });
  }

  checkStatus(status: any) {
    console.log(status);
  }

}
