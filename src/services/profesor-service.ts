import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Profesor } from '../model/profesor';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  
  private baseUrl = environment.apiUrl + '/profesor';

  constructor(
    private _httpClient: HttpClient
  ){};

  getProfesor(): Observable<Profesor[]>{
    return this._httpClient.get<Profesor[]>(this.baseUrl);
  }

  getProfesorById(id: number): Observable<Profesor>{
    return this._httpClient.get<Profesor>(`${this.baseUrl}/${id}`);
  }

}
