import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html'
})
export class PorCapitalComponent {

  termino: string = '';
  existError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  buscar(term: string) {

    this.existError = false;
    this.termino = term;

    this.paisService.buscarCiudad(this.termino).subscribe(paises => {
      this.paises = paises;
    }, () => {
      this.existError = true;
      this.paises = [];
    });
  }

}
