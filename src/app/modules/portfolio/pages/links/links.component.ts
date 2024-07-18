import { Component} from '@angular/core';
import { Image3dComponent } from "../../components/image3d/image3d.component";

@Component({
  selector: 'app-links',
  standalone: true,
  imports: [Image3dComponent],
  templateUrl: './links.component.html',
  styleUrl: './links.component.scss',
  providers: [
    { provide: Window, useValue: window }
  ]
})
export class LinksComponent  {

}
