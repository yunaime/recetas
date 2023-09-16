import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService } from '../../service/recetas.service';
import { Receta } from '../../interfaces/receta.interface';
import { SubCategory } from '../../interfaces/subcategory.interface';

@Component({
  selector: 'app-recetas-by-sub-category',
  templateUrl: './recetas-by-sub-category.component.html',
  styles: [
  ]
})
export class RecetasBySubCategoryComponent implements OnInit {

  constructor(private activated: ActivatedRoute,
    private srv: RecetasService
) {}

  subCategoryName!: string
  subCategory!: SubCategory;
  recetas!:Receta[];

 // aqui se captura el parametro que se pasa cuando se llama la uri /by/:subCategory
 ngOnInit(): void {
  this.activated.params
  .subscribe( ({ subCategory }) => {
    this.subCategoryName = subCategory;

    this.subCategory = this.srv.subCategoryByName(this.subCategoryName) || { name: '' };

    this.recetas = this.srv.bySubCategory(this.subCategoryName);
    console.log('recetas', this.recetas)
  })
 }
}
