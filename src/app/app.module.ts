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

@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoaderElemComponent,
    CellElemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // HttpClientModule,
    // IndexDataPagesService
  ],
  providers: [IndexDataPage, IndexDataPagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
