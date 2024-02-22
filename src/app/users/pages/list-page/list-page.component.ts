import { Component, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit{

  public users: User[] =  [];

  constructor( private userService: UserService ) {}

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe( users => this.users = users.reverse() );
  }

}
