import { Injectable } from '@angular/core';
import { IndexDataPage } from '../data/indexDataPage';

@Injectable()

export class IndexDataPagesService {

    constructor(public indexData: IndexDataPage) {}

    getData() {
        return this.indexData.data;
    }

    getContent() {
        return this.indexData.content;
    }

}