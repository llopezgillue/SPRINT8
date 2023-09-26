// starship-list.component.ts

import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';


@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {
  starships: any[] = []; // Almacena las naves actuales
  currentPage: number = 1; // Página actual

  constructor(private StarwarsService: StarwarsService) {}

  ngOnInit(): void {
    this.loadStarships(); // Llama a loadStarships() al iniciar el componente
  }

  loadStarships(): void {
    this.StarwarsService.getStarships(this.currentPage).subscribe(data => {
      this.starships = this.starships.concat(data.results);
    });
  }

  loadMore(): void {
    this.currentPage++; // Incrementa la página actual
    this.loadStarships();
  }
}
