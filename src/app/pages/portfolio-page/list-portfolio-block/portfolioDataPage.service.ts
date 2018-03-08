import { Injectable } from '@angular/core';
import { PortfolioDataPage } from '../../../../assets/data/portfolioDataPage';

@Injectable()

export class PortfolioDataPageService {

    constructor(public portfolioData: PortfolioDataPage ) {}

    getData() {
        return this.portfolioData.data;
    }

}