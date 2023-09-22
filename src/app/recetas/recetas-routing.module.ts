import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RecetaByNameComponent } from './pages/receta-by-name/receta-by-name.component';
import { RecetasByCategoryComponent } from './pages/recetas-by-category/recetas-by-category.component';
import { RecetasBySubCategoryComponent } from './pages/recetas-by-sub-category/recetas-by-sub-category.component';

const routes: Routes = [
    {
    path: 'by-name/:name',
    component: RecetaByNameComponent
  }, {
    path: 'by-category/:category',
    component: RecetasByCategoryComponent
  },
  {
    path: 'by-subCategory/:subCategory',
    component: RecetasBySubCategoryComponent
  }, {
    path: "**",
    redirectTo: 'home'
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ],
})
export class RecetasRoutineModule { }
