import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecetaComponent } from './components/receta/receta.component';
import { IngredientsTableComponent } from './components/ingredients-table/ingredients-table.component';
import { RecetasRoutineModule } from './recetas-routing.module';
import { RecetaByNameComponent } from './pages/receta-by-name/receta-by-name.component';
import { RecetasListComponent } from './components/recetas-list/recetas-list.component';
import { SubCategoryCardComponent } from './components/card/subcategory-card.component';
import { RecetasByCategoryComponent } from './pages/recetas-by-category/recetas-by-category.component';
import { RecetasBySubCategoryComponent } from './pages/recetas-by-sub-category/recetas-by-sub-category.component';

@NgModule({
  declarations: [
    RecetaComponent,
    RecetaByNameComponent,
    RecetasBySubCategoryComponent,
    RecetasByCategoryComponent,
    RecetasListComponent,
    IngredientsTableComponent,
    SubCategoryCardComponent,
  ],
  imports: [
    CommonModule,
    RecetasRoutineModule,
  ]
})
export class RecetasModule { }
