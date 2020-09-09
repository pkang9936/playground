import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import {UserService} from '../../service/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'webapp-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  public users: Observable<User[]>;
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  public isDarkTheme: boolean = true;

  constructor(
    zone: NgZone,
    private userService: UserService,
    private router: Router
    ) {
    this.mediaMatcher.addListener(mql =>
      zone.run(()=> this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)))
  }

  ngOnInit(): void {
    this.users = this.userService.users;
    this.userService.loadAll();

    this.router.events.subscribe(() => {
      if(this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }
  isScreenSmall() :boolean {
    return this.mediaMatcher.matches;
  }
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }
}
