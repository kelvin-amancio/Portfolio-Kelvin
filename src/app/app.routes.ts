import { Routes } from '@angular/router';
import { IndexComponent } from './modules/portfolio/pages/index/index.component';
import { LinksComponent } from './modules/portfolio/pages/links/links.component';
import { EbookComponent } from './modules/portfolio/pages/ebook/ebook.component';

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
    path: 'ebook',
    component: EbookComponent,
  },

  {
    path: '**',
    redirectTo: 'inicio',
    pathMatch: 'full'
  }
];
