import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './main-pages/about-us/about-us.component';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [
  {path: 'about-us', component:AboutUsComponent },
  {path: 'login', component:LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
