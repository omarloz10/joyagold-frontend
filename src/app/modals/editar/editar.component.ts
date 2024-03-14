import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { TipoService } from "../../servicios/tipo.service";
import { ProductosService } from "../../servicios/productos.service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-editar",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./editar.component.html",
  styleUrl: "./editar.component.css",
})
export class EditarComponent implements OnInit {
  tipos: any[] = [];

  @Input() productoPorId: any = [];
  @Output() objectEmitter = new EventEmitter<any>();

  dataForm: any = {
    tipo: 0,
    precio: 0,
  };

  ngOnInit(): void {
    this.obtenerTipos();
  }

  constructor(private servicioTipo: TipoService) {}

  obtenerTipos() {
    this.servicioTipo.obtenerTipo().subscribe(
      (response) => {
        this.tipos = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  modificarProducto(id: number, data: any) {
    let dataFormateada = {
      tipo: { id: data.tipo },
      precio: data.precio,
    };

    console.log(data);
  }

  submit() {
    if (this.dataForm.tipo != 0) {
      this.productoPorId.tipo = { id: this.dataForm.tipo };
    }

    if (this.dataForm.precio != 0) {
      this.productoPorId.precio = this.dataForm.precio;
    }

    // console.log(this.dataForm);
    this.objectEmitter.emit(this.productoPorId);
  }
}
