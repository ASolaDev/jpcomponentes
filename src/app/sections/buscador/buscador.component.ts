import { Component } from '@angular/core';
import { BaseDatosArticulosService } from '../../servicios/base-datos-articulos.service';
import { ArticuloComponent } from '../articulo/articulo.component';

@Component({
  selector: 'app-buscador',
  imports: [ArticuloComponent],
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.css'
})

export class BuscadorComponent {

  selCat: any = "";
  selFab: any = "";
  patron: string = "";
  resultados: any;


  constructor(private datos: BaseDatosArticulosService) { }

  getCategorias() {
    return this.datos.getCategorias();
  }

  getFabricantes() {
    return this.datos.getFabricantes();
  }

  setCat(id: number) {
    this.selCat = id;
  }

  setFab(id: number) {
    this.selFab = id;
  }

  setPatron(pattern: string) {
    this.patron = pattern;
  }

  filtrados() {
    return this.datos.filtrados(this.patron, this.selCat, this.selFab);
  }
}
