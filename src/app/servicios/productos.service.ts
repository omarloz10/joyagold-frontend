import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductosService {
  private url: string = "http://localhost:8080/api/v1/productos/";
  constructor(private http: HttpClient) {}

  obtenerProductos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.url}`);
  }

  obtenerPorId(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}${id}`);
  }

  crearProducto(data: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });

    return this.http.post(`${this.url}crear`, data, { headers });
  }

  actualizarProducto(id: number, data: any) {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return this.http.put(`${this.url}editar/${id}`, data, { headers });
  }

  borrarProducto(id: number): any {
    return this.http.delete<any>(`${this.url}borrar/${id}`);
  }
}
