import { Component, OnInit } from '@angular/core';
import { IndexDataPagesService } from '../../elements/cell-elem/indexDataPages.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.less']
})

export class IndexPageComponent implements OnInit {

  public keys;
  public pages;
  public temp;

  constructor(private indexData: IndexDataPagesService) {}

  ngOnInit() {

    // this.temp = this.indexData.getData().subscribe(temp => {
    //   console.log(temp);
    // });
    this.pages = this.indexData.getData();
    this.keys = Object.keys(this.pages);

    console.log(this.pages);
    console.log(this.keys);

  }

}
