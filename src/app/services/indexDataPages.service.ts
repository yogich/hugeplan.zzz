import { Injectable } from '@angular/core';
import { IndexDataPage } from '../../../assets/data/indexDataPage';

import '../../../../node_modules/rxjs/add/operator/map';

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