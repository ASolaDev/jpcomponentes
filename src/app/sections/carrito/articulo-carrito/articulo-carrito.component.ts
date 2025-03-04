import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articulo-carrito',
  imports: [],
  templateUrl: './articulo-carrito.component.html',
  styleUrl: './articulo-carrito.component.css'
})

export class ArticuloCarritoComponent {
  @Input() datos: any;


}
