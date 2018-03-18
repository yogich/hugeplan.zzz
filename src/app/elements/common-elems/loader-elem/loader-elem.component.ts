import { Component, OnInit } from '@angular/core';
import * as nanobar from '../../../../assets/js/lib/nanobar.js';
import * as set from '../../../../assets/js/custom/set.js';

@Component({
    selector: 'app-loader-elem',
    templateUrl: './loader-elem.component.html',
    styleUrls: ['./loader-elem.component.less']
})


export class LoaderElemComponent implements OnInit {

    constructor() {}

    ngOnInit() {
        let loaderBar = <any>{}; // hack

        const loaderContainer = document.querySelector('.loader-container'),
            loaderLogo = loaderContainer.querySelector('.logo'),
            loaderDescription = loaderContainer.querySelector('.description'),
            chooseDelay = new set.Delay();

        loaderBar = loadingBar('loader', '#fff');

        loaderPage();

        function loaderPage() {


            loaderLogo.classList.add('showed');
            loaderDescription.classList.add('showed');

            loaderBar.go(0);

            chooseDelay.MicroDelay(loading);
        }

        function loadingBar(id, bg) {
            const options = {
                bg: bg,
                id: id
            };
            return new nanobar.Nanobar( options );
        }

        // эмуляция загрузки

        function loading() {
            chooseDelay.MicroDelay(function() {
                loaderBar.go(15);
                chooseDelay.MiniDelay(function() {
                    loaderBar.go(65);
                    chooseDelay.MicroDelay(function() {
                        loaderBar.go(100);
                        chooseDelay.MicroDelay(closeLoaderPage);
                    });
                });
            });
        }

        function closeLoaderPage() {
            loaderContainer.classList.add('closing');
        }
    }

}
