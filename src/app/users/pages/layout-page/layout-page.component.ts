import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-layout-page',
    templateUrl: './layout-page.component.html',
})
export class LayoutPageComponent {

  constructor( private router: Router ) {}

  goHome(): void {
    this.router.navigate([ '/users/list' ])
  }

  goUserForm(): void {
    this.router.navigate([ '/users/new-user' ])
  }

}
