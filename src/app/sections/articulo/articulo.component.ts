import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-articulo',
  imports: [],
  templateUrl: './articulo.component.html',
  styleUrl: './articulo.component.css'
})

export class ArticuloComponent {
  @Input() datos: any;
}
