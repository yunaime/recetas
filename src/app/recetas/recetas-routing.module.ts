import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { RecetaByNameComponent } from './pages/receta-by-name/receta-by-name.component';
import { RecetasByCategoryComponent } from './pages/recetas-by-category/recetas-by-category.component';
import { RecetasBySubCategoryComponent } from './pages/recetas-by-sub-category/recetas-by-sub-category.component';

const routes: Routes = [
    {
    path: 'byName/:name',
    component: RecetaByNameComponent
  },{
    path: 'byCategory/:category',
    component: RecetasByCategoryComponent
  },
  {
    path: 'bySubCategory/:subCategory',
    component: RecetasBySubCategoryComponent
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
