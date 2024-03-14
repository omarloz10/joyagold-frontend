import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { TipoService } from "../../servicios/tipo.service";
import { TallaService } from "../../servicios/talla.service";
import { PurezaService } from "../../servicios/pureza.service";
import { MaterialService } from "../../servicios/material.service";
import { ProductosService } from "../../servicios/productos.service";

@Component({
  selector: "app-crear",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./crear.component.html",
  styleUrl: "./crear.component.css",
})
export class CrearComponent implements OnInit {
  @Output() objectEmitter = new EventEmitter<any>();

  dataFormulario = {
    nombre: "",
    precio: 0,
    color: "",
    peso: "",
    tipo: 0,
    material: 0,
    talla: 0,
    pureza: 0,
  };

  tipos: any[] = [];
  materiales: any[] = [];
  purezas: any[] = [];
  tallas: any[] = [];

  ngOnInit(): void {
    this.obtenerTodo();
  }
  constructor(
    private servicioTipos: TipoService,
    private servicioTalla: TallaService,
    private servicioPureza: PurezaService,
    private servicioMaterial: MaterialService,
    private servicioProducto: ProductosService
  ) {}

  obtenerTodo() {
    this.servicioTipos.obtenerTipo().subscribe(
      (response) => (this.tipos = response),
      (error) => console.log(error)
    );

    this.servicioMaterial.obtenerMaterial().subscribe(
      (response) => (this.materiales = response),
      (error) => console.log(error)
    );

    this.servicioPureza.obtenerPureza().subscribe(
      (response) => (this.purezas = response),
      (error) => console.log(error)
    );

    this.servicioTalla.obtenerTalla().subscribe(
      (response) => (this.tallas = response),
      (error) => console.log(error)
    );
  }

  submit() {
    let dataFinal = {
      nombre: this.dataFormulario.nombre,
      precio: this.dataFormulario.precio,
      color: this.dataFormulario.color,
      peso: this.dataFormulario.peso,
      tipo: {
        id: this.dataFormulario.tipo,
      },
      material: {
        id: this.dataFormulario.material,
      },
      talla: {
        id: this.dataFormulario.talla,
      },
      pureza: {
        id: this.dataFormulario.pureza,
      },
    };

    this.objectEmitter.emit(dataFinal);
  }
}
