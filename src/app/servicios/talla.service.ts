import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TallaService {
  private url = "http://localhost:8080/api/v1/talla/";
  constructor(private http: HttpClient) {}

  obtenerTalla(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }
}
