import { Component, HostListener } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { HeaderComponent } from "../../components/header/header.component";
import { AboutComponent } from "../../components/about/about.component";
import { WorkComponent } from '../../components/work/work.component';
import { ContactComponent } from "../../components/contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  imports: [NavComponent, HeaderComponent, AboutComponent, WorkComponent, ContactComponent, FooterComponent, NgIf, NgStyle],
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
export class IndexComponent {
  mouseX: number = 0;
  mouseY: number = 0;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }

  constructor() { }



}
