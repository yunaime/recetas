import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Receta } from 'src/app/recetas/interfaces/receta.interface';
import { RecetasService } from 'src/app/recetas/service/recetas.service';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
    ` #searchValue {
        width: 10em;
        display: flex;
        justify-content: center
      }
    `
  ]
})
export class SearchBoxComponent {

  @Output()
  recetaEmiter = new EventEmitter<Receta[]>;

  constructor(private srv: RecetasService) {

  }

  @ViewChild('txtTagInput')
  inputValue!:  ElementRef<HTMLInputElement>

  searchRecipe() {
    console.log('Buscando receta', this.inputValue.nativeElement.value);
    const recetas = this.srv.search(this.inputValue.nativeElement.value);
    console.log('Recetas', recetas.length);
    this.inputValue.nativeElement.value = '';

    this.recetaEmiter.emit( recetas );
  }
}
