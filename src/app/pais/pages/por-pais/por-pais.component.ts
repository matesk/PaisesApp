import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html'
})
export class PorPaisComponent {

  termino: string = '';
  existError: boolean = false;
  paises: Country[] = [];

  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(term: string) {

    this.existError = false;
    this.termino = term;
    this.mostrarSugerencias = false;

    this.paisService.buscarPais(this.termino).subscribe(paises => {
      this.paises = paises;
    }, () => {
      this.existError = true;
      this.paises = [];
    });
  }

  sugerencias(term: string) {

    this.existError = false;
    this.termino = term;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(term)
      .subscribe(
        paises => this.paisesSugeridos = paises.splice(0, 5),
        (error) => this.paisesSugeridos = []
      )

  }

  buscarSugerido(term: string) {
    this.buscar(term);
  }
}
