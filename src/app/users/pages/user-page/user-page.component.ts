import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styles: [
  ]
})
export class UserPageComponent implements OnInit{

  public user?: User;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.userService.getUserById( id ) ),
      )
      .subscribe( user => {
        if( !user ) return this.router.navigate([ '/users/list' ]);
        this.user = user
        return;
      })
  }

  goBack(): void {
    this.router.navigate([ '/users/list' ])
  }

}
