import {Component, OnInit, Input, ChangeDetectorRef} from '@angular/core';
import { IndexDataPagesService } from '../../elements/cell-elem/indexDataPages.service';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.less']
})

export class IndexPageComponent implements OnInit {

  public keys;
  public pages;
  public status;

  constructor(private indexData: IndexDataPagesService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.cdr.markForCheck();

    this.pages = this.indexData.getData();
    this.keys = Object.keys(this.pages);

  }

  checkStatus(status) {
    console.log(status);
    this.status = status;
  }

}
