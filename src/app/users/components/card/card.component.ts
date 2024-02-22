import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input()
  public user!: User;

  public hasLoaded: boolean = false;

  ngOnInit(): void {
    if ( !this.user ) throw Error('User property is required');
  }

  onLoad(): void {
    this.hasLoaded = true;
  }

}
