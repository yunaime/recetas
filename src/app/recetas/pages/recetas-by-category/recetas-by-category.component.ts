import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubCategory } from '../../interfaces/subcategory.interface';
import { RecetasService } from '../../service/recetas.service';
import { Receta } from '../../interfaces/receta.interface';
import { Category } from '../../interfaces/category.interface';

@Component({
  selector: 'app-recetas-by-category',
  templateUrl: './recetas-by-category.component.html',
  styles: [
  ]
})
export class RecetasByCategoryComponent {


  constructor(private activated: ActivatedRoute,
              private srv: RecetasService
    ) {}

 categoryName!: string

 subCategories!: SubCategory[];

 // aqui se captura el parametro que se pasa cuando se llama la uri /by/:name
 ngOnInit(): void {
  console.log('On init')
  this.activated.params
  .subscribe( ({ category }) => {
    console.log('category', category);
    this.categoryName = category;
    const sc = this.srv.subCategories(this.categoryName);
    console.log('Subcategories ', sc.length )
    this.subCategories = sc;
  })
 }

 get category (): Category | undefined {
  return this.srv.allCategory().find( c => c.name === this.categoryName );
 }

}
