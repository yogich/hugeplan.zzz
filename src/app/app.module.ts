import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { LoaderElemComponent } from './elements/loader-elem/loader-elem.component';
import { CellElemComponent } from './elements/cell-elem/cell-elem.component';
import { HttpModule } from '@angular/http';
// import { HttpClientModule } from "@angular/common/http";
import { IndexDataPagesService  } from './elements/cell-elem/indexDataPages.service';
import { IndexDataPage  } from '../assets/data/indexDataPage';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import {Router, RouterModule} from "@angular/router";

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
    PortfolioPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
      RouterModule.forRoot(routes)
    // HttpClientModule,
    // IndexDataPagesService
  ],
  providers: [IndexDataPage, IndexDataPagesService],
  bootstrap: [AppComponent]
})



export class AppModule { }
