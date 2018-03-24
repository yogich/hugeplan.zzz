import { Injectable } from '@angular/core';
import { PortfolioDataPage } from '../data/portfolioDataPage';

@Injectable()

export class PortfolioDataPageService {

    constructor(public portfolioData: PortfolioDataPage ) {}

    getData() {
        return this.portfolioData.data;
    }

}