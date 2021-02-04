import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { tap, delay, map, take, catchError} from 'rxjs/operators'
import { OnlineOfflineService } from './online-offline.service';
import { throwError } from 'rxjs';

import { CacheComponent } from '../cache/cache.component'

@Injectable({
  providedIn: 'root'
})
export class ReqresServiceService {

private readonly API = `${environment.API}`
//cache: CacheComponent;
constructor(
  private http: HttpClient,
  private onlineOffline: OnlineOfflineService,
  private cache: CacheComponent
  ) {

    this.listenStatusConnection();
  }

  list(): any{
    return this.http.get(`${this.API}?page=1`)
    .pipe(
      map( (response: any) =>response),
      catchError((e: any) => {
        return throwError(e);
      }),
      take(1)
    );
  }

  create(person): any {
    console.log(this.onlineOffline.isOnline);
    if(this.onlineOffline.isOnline){

      console.log("dentro do if", person);
      this.salve(person);
    } else {
      this.cache.localStorageSetItem(person);
      //localStorage.setItem("user", JSON.stringify(person))
      console.log("FALSO está off");
    }
    return this.http.post(this.API, person).pipe(take(1));
  }



  private listenStatusConnection() {
    this.onlineOffline.statusConexao
    .subscribe(online => {
        //let user = this.cache.localStorageItem();
        //let user = localStorage.getItem("user");

        //console.log("AAAAAAAAAAAAAAAAAA", this.cache);

        if(online){
          let user = localStorage.getItem("user");
          let userJSON = JSON.parse(user);
          this.salve(userJSON);

          console.log("onlineeeeeeeeeeeeee");
        } else {
          console.log("offlineeeeeeeeeeee");
        }
      })
  }

  salve(person): any{
    console.log("salve", person);
    this.http.post(this.API, person);
    return;
  }
}
