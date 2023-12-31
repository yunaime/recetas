import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { RecetaCardComponent } from './components/card/receta-card.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [
    HomePageComponent,
    SideBarComponent,
    HeaderBarComponent,
    RecetaCardComponent,
    SearchBoxComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
  ],
  exports: [
    SideBarComponent,
    HeaderBarComponent,
    RecetaCardComponent,
    HomePageComponent
  ]
})
export class SharedModule { }
