import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormRecord, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { switchMap } from 'rxjs';
import { ConfirmDialogComponent } from '../../components/confirm-dialog/confirm-dialog.component';
import { Message, MessageService } from 'primeng/api';
import { ValidateService } from '../../services/validate.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  providers: [DialogService, MessageService]
})
export class NewPageComponent implements OnInit{

  public dialogRef: DynamicDialogRef | undefined;

  public messages: Message[] | undefined;

  public userForm: FormRecord = this.fb.group({
    id:          [''],
    address:     ['', [Validators.required, Validators.minLength(3)]],
    age:         ['', [Validators.required, Validators.min(3), Validators.pattern("^[0-9]{0,99}$")]],
    email:       ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
    firstName:   ['', [Validators.required, Validators.minLength(3)]],
    lastName:    ['', [Validators.required, Validators.minLength(3)]],
    occupation:  ['', [Validators.required, Validators.minLength(3)]],
    phone:       ['', [Validators.required, Validators.pattern("^[0-9]{10}$")]],
    photo:       ['', [Validators.required]],
    description: [''],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService ,
    private activedRoute: ActivatedRoute,
    private router: Router,
    private validateServices: ValidateService,
    public dialogService: DialogService,
    public messageService: MessageService

  ) {}

  get currentUser(): User {
    return this.userForm.value as User;
  }


  ngOnInit(): void {
    if ( !this.router.url.includes('edit') ) return;
    this.activedRoute.params
      .pipe(
        switchMap( ({ id }) => this.userService.getUserById( id ) ),
      ).subscribe( user => {
        if ( !user ) return this.router.navigateByUrl('/')
        console.log(user)
        this.userForm.reset( user )
        return
      });
  }

  ngOnDestroy() {
    if (this.dialogRef) {
        this.dialogRef.close();
    }
  }

  //Seccion to interactive with a user services

  onSubmit(): void {

    if ( !this.currentUser.id ) this.userForm.removeControl('id');
    if ( this.userForm.invalid ) return;

    if( this.currentUser.id ) {
      this.userService.updateUser( this.currentUser )
        .subscribe( user => {
          this.router.navigate([ 'users' ])
        })

      return;
    }

    this.userService.addUser( this.currentUser )
      .subscribe( user => {
        this.router.navigate([ 'users' ])
      })

  }

  onDeleteUser(): void {
    if ( !this.currentUser.id ) throw Error( 'User id is required' );


    this.dialogRef = this.dialogService.open( ConfirmDialogComponent, {

        data: { user: this.userForm.value as User },
        header: 'Delete User',
        width: '50%',
        contentStyle: { overflow: 'auto' },
        baseZIndex: 10000,
        maximizable: true

    });

    this.dialogRef.onClose
      .subscribe( result => {
        if (! result ) return;
        this.userService.deleteUserById( this.currentUser.id )
          .subscribe( wasDeleted => {
              if ( wasDeleted)
              this.router.navigate(['/users'])
            }
          )
    })
  }

  // Section to interactive with validete service
  // her target is validate the possible errors in the form

  validateField( field: string ): boolean | null {

    return this.validateServices.isValidaField( this.userForm, field );

  }

  fieldErrors( field: string ): string | null {
    return this.validateServices.getFieldError( this.userForm, field );
  }

}
