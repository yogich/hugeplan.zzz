import { Component, OnInit } from '@angular/core';
import { PortfolioDataPageService } from '../../../services/portfolioDataPage.service';


@Component({
  selector: 'app-list-portfolio-block',
  templateUrl: './list-portfolio-block.component.html',
  styleUrls: ['./list-portfolio-block.component.less']
})
export class ListPortfolioBlockComponent implements OnInit {

  public keys;
  public projects;


  constructor(private portfolioData: PortfolioDataPageService) { }

  ngOnInit() {
    this.projects = this.portfolioData.getData();
    this.keys = Object.keys(this.projects);
  }

}
