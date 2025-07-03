import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { EducacionComponent } from './pages/educacion/educacion.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: '**', redirectTo: '' }
];
