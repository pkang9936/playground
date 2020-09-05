import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarRef, SimpleSnackBar} from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class MessageService {


  constructor(private _snackBar: MatSnackBar) { }

  handle(message: any, action = 'Close', callback?: () => any) {

    let snakbarRef: MatSnackBarRef<SimpleSnackBar> = this._snackBar.open(message, action);
    snakbarRef.onAction().subscribe(() =>{
      if(!!callback) {
        callback();
      }
    });
  }
}
