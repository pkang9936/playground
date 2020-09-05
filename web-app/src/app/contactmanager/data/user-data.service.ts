import { Injectable } from '@angular/core';
import {InMemoryDbService, RequestInfo} from 'angular-in-memory-web-api';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class UserDataService implements InMemoryDbService{

  constructor() { }
  createDb(reqInfo?: RequestInfo): {} | import("rxjs").Observable<{}> | Promise<{}> {
    const users = UserData.users;
    return {users};
  }
}
