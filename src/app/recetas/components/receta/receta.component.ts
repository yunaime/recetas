import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Receta } from '../../interfaces/receta.interface';
import { RecetasService } from '../../service/recetas.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styles: [
  ]
})
export class RecetaComponent implements OnInit {

  constructor(
    private router: Router,
    private serv: RecetasService) {
  }

  receta!: Receta;

  @Input()
  recetaName!: string;

  ngOnInit(): void {

    if(!this.recetaName) return;

    const rec = this.serv.byName( this.recetaName );

    if( !rec ) this.router.navigateByUrl('home');

    if( rec ) this.receta = rec;
  }

}
