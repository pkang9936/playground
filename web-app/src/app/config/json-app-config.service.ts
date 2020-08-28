import { Injectable } from '@angular/core';
import { AppConfig } from './app-config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonAppConfigService extends AppConfig {

  constructor(private http: HttpClient) {
    super();
  }

  //This function needs to return at promise
  load() {
    return this.http.get<AppConfig>('conf.json')
    .toPromise()
    .then(data => {
      this.title = data.title;
      this.baseUrl = data.baseUrl
    })
    .catch(()=> {
      console.error("Could not load configuration");
    })
  }
}
