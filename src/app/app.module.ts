import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { LoaderElemComponent } from './elements/common-elems/loader-elem/loader-elem.component';
import { CellElemComponent } from './elements/cell-elem-index/cell-elem.component';
import { IndexDataPagesService  } from './elements/cell-elem-index/indexDataPages.service';
import { IndexDataPage  } from '../assets/data/indexDataPage';
import { PortfolioPageComponent } from './pages/portfolio-page/portfolio-page.component';
import { RouterModule} from '@angular/router';
import { BackToIndexComponent } from './elements/common-elems/back-to-index/back-to-index.component';
import { HeaderPortfolioPageComponent } from './pages/portfolio-page/header-portfolio-page/header-portfolio-page.component';
import { AboutMeShortComponent } from './elements/about-me-short/about-me-short.component';
import { ListPortfolioBlockComponent } from './pages/portfolio-page/list-portfolio-block/list-portfolio-block.component';
import { PortfolioDataPage } from '../assets/data/portfolioDataPage';
import { PortfolioDataPageService } from './pages/portfolio-page/list-portfolio-block/portfolioDataPage.service';
import { ListPortfolioItemComponent } from './pages/portfolio-page/list-portfolio-block/list-portfolio-item/list-portfolio-item.component';
import { CellElemPortfolioComponent } from './elements/cell-elem-portfolio/cell-elem-portfolio.component';
import { ContactFormPopupComponent } from './elements/common-elems/contact-form-popup/contact-form-popup.component';
import { ContactMeElemComponent } from './elements/common-elems/contact-me-elem/contact-me-elem.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';



@NgModule({
  imports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})

export class DemoMaterialModule {}

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
    ListPortfolioItemComponent,
    CellElemPortfolioComponent,
    ContactFormPopupComponent,
    ContactMeElemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'hugeplan-app'}),
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    DemoMaterialModule,
  ],
  providers: [IndexDataPage, IndexDataPagesService, PortfolioDataPage, PortfolioDataPageService],
  bootstrap: [AppComponent]
})



export class AppModule { }
