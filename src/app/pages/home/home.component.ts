import { Component } from '@angular/core';
import { ArtisanCardComponent } from '../../components/artisan-card/artisan-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ArtisanCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
