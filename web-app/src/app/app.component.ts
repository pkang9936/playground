import { Component } from '@angular/core';
import { AppConfig } from './config/app-config';

@Component({
  selector: 'webapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-app';
  constructor(private appConfig: AppConfig){
    this.title = appConfig.title;

    console.log(appConfig.title);
    console.log(appConfig.baseUrl);
  }
}
