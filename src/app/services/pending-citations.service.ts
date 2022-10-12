import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PendingCitationsService {
  
  constructor(private http: HttpClient) { }

  public pendingCitations(){
    return this.http.get('./assets/Json/pendingCitation.json');
  }
}
  