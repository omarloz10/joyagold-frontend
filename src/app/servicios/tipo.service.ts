import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class TipoService {
  private url = "http://localhost:8080/api/v1/tipojoya/";
  constructor(private http: HttpClient) {}

  obtenerTipo(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }
}
