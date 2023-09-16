import { Component, Input } from '@angular/core';
import { SubCategory } from '../../interfaces/subcategory.interface';

@Component({
  selector: 'recetas-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent {

  @Input()
  card!: SubCategory;
}
