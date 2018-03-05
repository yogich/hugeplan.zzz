import { Injectable } from '@angular/core';
import { IndexDataPage } from '../../../assets/data/indexDataPage';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import '../../../../node_modules/rxjs/add/operator/map';

@Injectable()

export class IndexDataPagesService {

    constructor(public indexData: IndexDataPage, private http: Http) {}

    getData() {
        return this.indexData.data;
    }

}