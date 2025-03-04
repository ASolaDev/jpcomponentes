import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private carrito: any[] = [];

  constructor() {
    this.carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
  }

  getCarrito() {
    return this.carrito;
  }

  addToCarrito(datos: any) {
    this.carrito.push(datos);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

}
