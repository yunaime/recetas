import { Component } from '@angular/core';
import { Category } from 'src/app/recetas/interfaces/category.interface';
import { RecetasService } from 'src/app/recetas/service/recetas.service';

@Component({
  selector: 'shared-side-bar',
  templateUrl: './side-bar.component.html',
  styles: [

  ]
})
export class SideBarComponent {
  constructor(private serv: RecetasService) {

  }

  get categories(): Category[] {
    return this.serv.allCategory();
    // return this.serv.subcategoryByCategoryName('Recetas de Aperitivos y tapas');
  }
}
