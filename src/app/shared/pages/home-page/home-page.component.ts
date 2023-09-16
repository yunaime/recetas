import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/recetas/interfaces/receta.interface';
import { RecetasService } from 'src/app/recetas/service/recetas.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styles: [
  ]
})
export class HomePageComponent implements OnInit {

  constructor(private srv: RecetasService) {}
  ngOnInit(): void {
    this.recetas = this.srv.recetas();
  }

  recetas!: Receta[];
}
