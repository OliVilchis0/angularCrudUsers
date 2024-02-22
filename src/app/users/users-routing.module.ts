import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from "./pages/layout-page/layout-page.component";
import { ListPageComponent } from "./pages/list-page/list-page.component";
import { NewPageComponent } from "./pages/new-page/new-page.component";
import { UserPageComponent } from "./pages/user-page/user-page.component";

const routes: Routes = [{
  path: '',
  component: LayoutPageComponent,
  children: [
    { path: 'new-user', component: NewPageComponent },
    { path: 'edit/:id', component: NewPageComponent },
    { path: 'list', component: ListPageComponent },
    { path: ':id', component: UserPageComponent },
    { path: '**', redirectTo: 'list' },
  ]
}]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
