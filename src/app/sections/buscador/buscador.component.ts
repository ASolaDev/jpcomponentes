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

  selCat: string = "0";
  selFab: string = "0";
  patron: string = "";

  categorias: any[] = [];
  fabricantes: any[] = [];
  resultados: any[] = [];

  constructor(private datos: BaseDatosArticulosService) {
    this.categorias = this.datos.getCategorias();
    this.fabricantes = this.datos.getFabricantes();
    this.buscar();
  }

  setCat(id: string) {
    this.selCat = id;
    this.buscar();
  }

  setFab(id: string) {
    this.selFab = id;
    this.buscar();
  }

  setPatron(pattern: string) {
    this.patron = pattern;
    this.buscar();
  }

  buscar() {
    this.resultados = this.datos.filtrados(this.patron, this.selCat, this.selFab);
  }
}
