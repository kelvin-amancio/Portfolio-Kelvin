import { Component, HostListener } from '@angular/core';
import { NavComponent } from "../../components/nav/nav.component";
import { HeaderComponent } from "../../components/header/header.component";
import { AboutComponent } from "../../components/about/about.component";
import { WorkComponent } from '../../components/work/work.component';
import { ContactComponent } from "../../components/contact/contact.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgIf, NgStyle } from '@angular/common';
import { ServiceDeliveryComponent } from "../../components/service-delivery/service-delivery.component";
import { RangeComponent } from "../../components/range/range.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { AboutHeaderComponent } from "../../components/about-header/about-header.component";
import { InformationComponent } from "../../components/information/information.component";

@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  imports: [NavComponent, HeaderComponent, AboutComponent, WorkComponent, ContactComponent, FooterComponent, NgIf, NgStyle, ServiceDeliveryComponent, RangeComponent, WhatsappComponent, AboutHeaderComponent, InformationComponent],
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
