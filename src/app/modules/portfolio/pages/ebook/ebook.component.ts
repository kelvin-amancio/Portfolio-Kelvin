import { Component, HostListener } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";

@Component({
  selector: 'app-ebook',
  standalone: true,
  imports: [NavComponent],
  templateUrl: './ebook.component.html',
  styleUrl: './ebook.component.scss'
})
export class EbookComponent {
  mouseX: number = 0;
  mouseY: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}
