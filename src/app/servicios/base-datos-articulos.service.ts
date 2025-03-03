import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosArticulosService {

  articulos: any[] = [];
  categorias: any[] = [];
  fabricantes: any[] = [];

  constructor() {

  }


}
