import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'webapp-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {
  avatars=[
    'svg-1', 'svg-2','svg-3','svg-4'
  ];
  user: User;
  public name = new FormControl('', [Validators.required]);

  constructor(private dialogRef: MatDialogRef<NewContactDialogComponent>,
    private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
  }
  save(){
    var userAvt = this.user.avatar;
    this.userService.save(this.user).then(user => {
      this.dialogRef.close(user);
    });

  }

  dismiss() {
    this.dialogRef.close(null);
  }

  getErrorMessage() {
    return this.name.hasError('required')? 'You must enter a name': '';
  }
}
