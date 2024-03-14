import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MaterialService {
  private url = "http://localhost:8080/api/v1/materiales/";
  constructor(private http: HttpClient) {}

  obtenerMaterial(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }
}
