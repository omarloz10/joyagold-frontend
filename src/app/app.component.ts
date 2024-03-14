import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { ProductosComponent } from "./productos/productos.component";
import { CrearComponent } from "./modals/crear/crear.component";
import { ProductosService } from "./servicios/productos.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, ProductosComponent, CrearComponent],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent implements OnInit {
  productos: any;
  constructor(private servicio: ProductosService) {}
  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(): any {
    this.servicio.obtenerProductos().subscribe(
      (response) => {
        this.productos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  crearProducto(dataFinal: any) {
    this.servicio.crearProducto(dataFinal).subscribe(
      (res) => {
        this.servicio.obtenerProductos().subscribe((res) => {
          this.productos = res;
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
