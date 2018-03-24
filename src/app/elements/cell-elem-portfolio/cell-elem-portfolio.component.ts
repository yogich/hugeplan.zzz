import { Component, OnInit, Input } from '@angular/core';
import { Set } from '../../../assets/js/custom/set';
import * as $ from 'jquery';
import * as mP from '../../../assets/js/lib/jquery.magnific-popup.min.js';
import * as mCSB from '../../../assets/js/lib/jquery.mCustomScrollbar.js';


@Component({
  selector: 'app-cell-elem-portfolio',
  templateUrl: './cell-elem-portfolio.component.html',
  styleUrls: ['./cell-elem-portfolio.component.less']
})

export class CellElemPortfolioComponent implements OnInit {

  @Input() content;

  public scroll;
  private mp;
  private mcsb;

  constructor(public set: Set) {}

  ngOnInit() {
    this.mp = mP;
    this.mcsb = mCSB;
    this.scroll = this.set.Scroll;
    this.popupBehanceUpdate();
  }

  popupBehanceUpdate() {
    const __this = this;
    $('.popup-with-zoom-anim').magnificPopup({
      type: 'inline',
      fixedContentPos: false,
      fixedBgPos: true,
      closeBtnInside: true,
      preloader: false,
      midClick: true,
      removalDelay: 300,
      mainClass: 'my-mfp-zoom-in',
      callbacks: {
        open: function () {
          $('html,body').addClass('overflow');
          __this.scroll.disableScroll();
          const _this = this,
              _project = _this.currItem.el[0],
              _link = '/assets/images/portfolio/' + _project.dataset.job + '/popup/behance_' + _project.dataset.link + '.jpg';
          console.log(_this);
          console.log(_project);
          console.log(_link);

          $('.mfp-content').mCustomScrollbar({
            mouseWheel: { deltaFactor: 100 }
          });

          $('.wrapper-behance').html('<img src="' + _link + '" alt="">');

        },
        close: function () {
          __this.scroll.enableScroll();
          $('html,body').removeClass('overflow');
        }
      }
    });
  }

}


