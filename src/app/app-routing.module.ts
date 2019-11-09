import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
//DEFAULT ROUTE:This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
//After the browser refreshes, the router loads the DashboardComponent and the browser address bar shows the /dashboard URL.
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:id', component: HeroDetailsComponent }];
  //The colon (:) in the path indicates that :id is a placeholder for a specific hero id.

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
