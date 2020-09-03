import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'webapp-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user: User;
  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe( p => {
      let id = p ['id'];
      if(!id){
        id = 1;
      }
      this.user = null;

       this.userService.users.subscribe(users => {

          if(users.length == 0) return;

          setTimeout(() => {
            this.user = this.userService.userById(id);
          }, 500);
       });
  });
  }

}
