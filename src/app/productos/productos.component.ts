import { Component, Input, Output } from "@angular/core";
import { ProductosService } from "../servicios/productos.service";
import { DetallesComponent } from "../modals/detalles/detalles.component";
import { EditarComponent } from "../modals/editar/editar.component";

@Component({
  selector: "app-productos",
  standalone: true,
  imports: [DetallesComponent, EditarComponent],
  templateUrl: "./productos.component.html",
  styleUrl: "./productos.component.css",
})
export class ProductosComponent {
  @Input() productos: any;

  productoPorId: any;

  constructor(private servicio: ProductosService) {}

  obtenerPorId(id: number): any {
    this.servicio.obtenerPorId(id).subscribe(
      (response) => {
        this.productoPorId = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  borrarProducto(id: number) {
    if (
      confirm(
        "¿Está seguro que desea eliminar de manera permanente este registro?"
      )
    ) {
      this.servicio.borrarProducto(id).subscribe(() => {
        this.refrescar();
      });
    }
  }

  mostrarDetalles(id: number) {
    this.obtenerPorId(id);
  }

  modificarProducto(dataFinal: any) {
    this.servicio.actualizarProducto(dataFinal.id, dataFinal).subscribe(
      (res) => {
        console.log(res);
        this.servicio.obtenerProductos().subscribe(
          (res) => {
            this.productos = res;
          },
          (error) => console.log(error)
        );
      },
      (error) => {
        console.log(error);
      }
    );
    console.log(dataFinal);
  }

  refrescar() {
    this.servicio.obtenerProductos().subscribe((res) => {
      this.productos = res;
    });
  }
}
