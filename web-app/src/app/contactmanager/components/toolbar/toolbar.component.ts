import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewContactDialogComponent} from '../new-contact-dialog/new-contact-dialog.component';
import {MessageService} from '../../service/message.service';
import { Router } from '@angular/router';
@Component({
  selector: 'webapp-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter();
  constructor(private matDialog: MatDialog,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
  }
  openAddContactDialog(): void {
    let dialogRef = this.matDialog.open(NewContactDialogComponent, {
      width : '450px'
    });
    dialogRef.afterClosed().subscribe (result => {
      console.log('dialog was closed', result);
      if(result) {
        this.messageService.handle('Contact Added', 'Navigate', () => {
          this.router.navigate(['/contactmanager', result.id])
        });
      }
    });
  }
}
