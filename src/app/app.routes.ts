import { Routes } from '@angular/router';
import { IndexComponent } from './modules/portfolio/pages/index/index.component';
import { LinksComponent } from './modules/portfolio/pages/links/links.component';

export const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    component: IndexComponent
  },
  {
    path: 'links',
    component: LinksComponent,
  },
  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];
