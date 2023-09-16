import { Component, Input } from '@angular/core';
import { Receta } from 'src/app/recetas/interfaces/receta.interface';

@Component({
  selector: 'app-recetas-list',
  templateUrl: './recetas-list.component.html',
  styles: [
  ]
})
export class RecetasListComponent {

  @Input()
  recetas!: Receta[];
}
