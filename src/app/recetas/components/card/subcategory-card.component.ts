import { Component, Input } from '@angular/core';
import { SubCategory } from '../../interfaces/subcategory.interface';

@Component({
  selector: 'subcategory-card',
  templateUrl: './subcategory-card.component.html',
  styles: [
  ]
})
export class SubCategoryCardComponent {

  @Input()
  card!: SubCategory;
}
