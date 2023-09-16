import { Component, Input } from '@angular/core';
import { Receta } from 'src/app/recetas/interfaces/receta.interface';

@Component({
  selector: 'receta-card',
  templateUrl: './receta-card.component.html',
  styles: [
  ]
})
export class RecetaCardComponent {

  @Input()
  card!: Receta;
}
