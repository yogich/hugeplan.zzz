import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { LoaderElemComponent } from './elements/loader-elem/loader-elem.component';


@NgModule({
  declarations: [
    AppComponent,
    IndexPageComponent,
    LoaderElemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
