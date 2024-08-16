import { Component, HostListener } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HeaderEbookComponent } from "../../components/header-ebook/header-ebook.component";
import { ContentEbookComponent } from "../../components/content-ebook/content-ebook.component";
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-ebook',
  standalone: true,
  imports: [NavComponent, FormsModule, ReactiveFormsModule, NgIf, HeaderEbookComponent, ContentEbookComponent],
  templateUrl: './ebook.component.html',
  styleUrl: './ebook.component.scss',
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition('void <=> *', [
        animate(1000)
      ]),
    ])
  ]
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
