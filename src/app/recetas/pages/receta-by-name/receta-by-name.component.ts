import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { switchMap, map } from 'rxjs'

@Component({
  selector: 'app-receta-by-name',
  templateUrl: './receta-by-name.component.html',
  styles: [
  ]
})
export class RecetaByNameComponent implements OnInit {

  constructor(private activated: ActivatedRoute) {

  }

 @Input() recetaName!: string

 // aqui se captura el parametro que se pasa cuando se llama la uri /by/:name
 ngOnInit(): void {
  this.activated.params
  .subscribe( ({ name }) => {
    this.recetaName = name;
  })
 }
}
