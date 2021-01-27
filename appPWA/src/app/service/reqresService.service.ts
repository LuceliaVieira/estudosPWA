import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { tap, delay, map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ReqresServiceService {

private readonly API = `${environment.API}`

constructor(private http: HttpClient) { }

list():any{
  return this.http.get(`${this.API}?page=1`)
  .pipe(
    tap( (response:any) => console.log(response)),
    map( (response:any) =>response)

  );
}

}
