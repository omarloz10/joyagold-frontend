import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurezaService {
  private url = "http://localhost:8080/api/v1/pureza/";
  constructor(private http: HttpClient) {}

  obtenerPureza(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }
}
