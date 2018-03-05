import { Injectable } from '@angular/core';
import { IndexDataPage } from '../../../assets/data/indexDataPage';
import { Http } from '@angular/http';
import { RequestOptions } from '@angular/http';

import '../../../../node_modules/rxjs/add/operator/map';

@Injectable()

export class IndexDataPagesService {

    constructor(public indexData: IndexDataPage, private http: Http) {}

    getData() {

        // let headers = null;
        // headers = '{Content-Type: application/json},';
        // headers += '{Accept: application/json},';
        // headers += '{Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT},';
        // headers += '{Access-Control-Allow-Origin: *},';
        // headers += '{Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Authorization, Accept, Client-Security-Token, Accept-Encoding, allow}';
        // let options = new RequestOptions({ headers: headers });
        //
        // console.log(options);

        const data = this.indexData.data;
        //const url = 'http://hugeplan.zzz.com.ua/std/main/indexDataPage.json';
        //const serverData = this.http.get(url, options);

        //console.log(serverData);
        return data;
    }

}