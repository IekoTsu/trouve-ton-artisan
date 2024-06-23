import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleMenu(){
    let NavMenu = document.querySelector(".nav-bar__menu")

    if (NavMenu){
      NavMenu.classList.toggle("active")
    }
  }
}
