import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent {

  constructor(
    public config: DynamicDialogConfig,
    public ref: DynamicDialogRef
  ) { }

  get user(): User {
    return this.config.data.user
  }

  confirm(): void {
    this.ref.close(true)
  }

  cancel(): void {
    this.ref.close(false)
  }


}
