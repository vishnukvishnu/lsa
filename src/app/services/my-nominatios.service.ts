import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyNominatiosService {

  constructor(private http: HttpClient) { }

  public nominieNames(){
    return this.http.get('./assets/Json/myNominations.json');
  }
}
