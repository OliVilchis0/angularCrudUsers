import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { Error404ErrorComponent } from "./shared/pages/error404-error/error404-error.component";

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersModule )
  },
  {
    path: '404',
    component: Error404ErrorComponent,
  },
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404'
  }
]

@NgModule({
  imports: [RouterModule.forRoot( routes )],
  exports: [RouterModule],
})
export class AppRoutingModule {}
