import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomePageComponent
  // },
   {
    path: 'recetas',
    loadChildren: () => import('./recetas/recetas.module').then(m => m.RecetasModule)
  },
  {
    path: '**',
    redirectTo: 'recetas'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot ( routes )
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
  providers: [],
})
export class AppRoutingModule { }
