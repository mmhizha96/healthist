import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { VerifyComponent } from './modules/verify/verify.component';

const routes: Routes = [
  {
    path: '',
    component:LoginComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: 'login',
   component:LoginComponent
  },
  {
    path: 'verify',
    component:VerifyComponent
  },

  {path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
