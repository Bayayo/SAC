import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor() { }

  avatar: any;
  usuario: string;
  puesto: string;

  ngOnInit() {
    this.usuario = "Fulanito Solorzano";
    this.puesto ="Gerente de Ventas";
  }

}
