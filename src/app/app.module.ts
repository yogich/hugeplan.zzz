import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { LoaderElemComponent } from './elements/loader-elem/loader-elem.component';
import { CellElemComponent } from './elements/cell-elem/cell-elem.component';
import { IndexDataPagesService  } from './elements/cell-elem/indexDataPages.service';
import { IndexDataPage  } from '../assets/data/indexDataPage';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { RouterModule} from '@angular/router';
import { BackToIndexComponent } from './elements/back-to-index/back-to-index.component';
import { HeaderPortfolioPageComponent } from './pages/portfolio-page/header-portfolio-page/header-portfolio-page.component';
import { AboutMeShortComponent } from './elements/about-me-short/about-me-short.component';
import { ListPortfolioBlockComponent } from './pages/portfolio-page/list-portfolio-block/list-portfolio-block.component';
import { PortfolioDataPage } from '../assets/data/portfolioDataPage';
import { PortfolioDataPageService } from './pages/portfolio-page/list-portfolio-block/portfolioDataPage.service';
import { ListPortfolioItemComponent } from './pages/portfolio-page/list-portfolio-block/list-portfolio-item/list-portfolio-item.component';

const routes = [
  {path: '', component: IndexPageComponent},
  {path: 'portfolio', component: PortfolioPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoaderElemComponent,
    CellElemComponent,
    PortfolioPageComponent,
    BackToIndexComponent,
    HeaderPortfolioPageComponent,
    AboutMeShortComponent,
    ListPortfolioBlockComponent,
    ListPortfolioItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [IndexDataPage, IndexDataPagesService, PortfolioDataPage, PortfolioDataPageService],
  bootstrap: [AppComponent]
})



export class AppModule { }
