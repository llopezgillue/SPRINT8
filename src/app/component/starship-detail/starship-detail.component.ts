import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StarwarsService } from '../../services/starwars.service';


@Component({
  selector: 'app-starship-detail',
  templateUrl: './starship-detail.component.html',
  styleUrls: ['./starship-detail.component.css']
})
export class StarshipDetailComponent implements OnInit {
  starship: any;
  imageUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private StarwarsService: StarwarsService
  ) {}

  ngOnInit(): void {
    this.getStarshipDetails();
  }

  getStarshipDetails(): void {
    const id = this.route.snapshot.paramMap.get('id');


    if (id !== null) {
      this.StarwarsService.getStarshipDetails(`https://swapi.dev/api/starships/${id}/`).subscribe(data => {
        this.starship = data;
        this.imageUrl = this.StarwarsService.getStarshipImageUrl(id);
      });
    }
  }

  handleImageError(){
    this.imageUrl = 'https://starwars-visualguide.com/assets/img/big-placeholder.jpg'
  }
}
