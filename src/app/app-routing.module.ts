import { BuildoverviewComponent } from './buildsPage/features/buildoverview/buildoverview.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './userManagement/login/login.component';
import { UserRegistrationComponent } from './userManagement/user-registration/user-registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'builds', pathMatch: 'full'},
  {component: BuildoverviewComponent, path: 'builds'},
  {component: LoginComponent, path: 'auth/login'},
  {component: UserRegistrationComponent, path: 'auth/register'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
