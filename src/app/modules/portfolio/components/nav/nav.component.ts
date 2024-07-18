import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  MenuHidden() {
    let menu = document.querySelector('.nav-contentt') as HTMLElement;
    let bar = document.getElementById('bar') as HTMLElement;
    let barclose = document.getElementById('barclose') as HTMLElement;

    if (menu.classList.contains('open')) {
      menu.classList.remove('open');
      barclose.style.display = "none";
      bar.style.display = "block";
    }
    else {
      menu.classList.add('open');
      bar.style.display = "none";
      barclose.style.display = "block";
    }
    document.querySelectorAll(".navText").forEach(element => {
      element.addEventListener("click", () => {
        menu.classList.remove('open');
        bar.style.display = "block";
        barclose.style.display = "none";
      })
    });
  }
}
