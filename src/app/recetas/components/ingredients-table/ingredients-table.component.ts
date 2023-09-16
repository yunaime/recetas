import { Component, Input } from '@angular/core';
import { Receta } from '../../interfaces/receta.interface';

@Component({
  selector: 'ingredients-table',
  templateUrl: './ingredients-table.component.html',
  styles: [
    `
      .ingredients {
        background: blue;
        color: black;
      }
    `
  ]
})
export class IngredientsTableComponent {

  @Input()
  receta!: Receta;
}
