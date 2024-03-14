import { Component, Input } from "@angular/core";

@Component({
  selector: "app-detalles",
  standalone: true,
  imports: [],
  templateUrl: "./detalles.component.html",
  styleUrl: "./detalles.component.css",
})
export class DetallesComponent {
  @Input() productoPorId: any;
}
