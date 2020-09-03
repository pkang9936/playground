import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'webapp-contactmanager-app',
  template: `
    <webapp-sidenav></webapp-sidenav>
  `,
  styles: [
  ]
})
export class ContactmanagerAppComponent implements OnInit {

  constructor(private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer) {
    this.iconRegistry.addSvgIconSet(sanitizer.bypassSecurityTrustResourceUrl('assets/avatars.svg'));
   }

  ngOnInit(): void {
  }

}
