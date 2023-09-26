
import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../../services/starwars.service';


@Component({
  selector: 'app-starship-list',
  templateUrl: './starship-list.component.html',
  styleUrls: ['./starship-list.component.css']
})
export class StarshipListComponent implements OnInit {
  starships: any[] = [];
  currentPage: number = 1;

  constructor(private StarwarsService: StarwarsService) {}

  ngOnInit(): void {
    this.loadStarships();
  }

  loadStarships(): void {
    this.StarwarsService.getStarships(this.currentPage).subscribe(data => {
      this.starships = this.starships.concat(data.results);
    });
  }

  loadMore(): void {
    this.currentPage++; 
    this.loadStarships();
  }
}
