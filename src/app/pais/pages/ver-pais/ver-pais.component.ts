import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html'
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService) { }  //Obtenemos el valor de la URL

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.paisService.getPaisById(id)),
        tap()
      )
      .subscribe(pais => {
        this.pais = pais;
      });

    //Obtenemos el ID de la URL y llamados al servicio con el id para obtener el pais
    // this.activatedRoute.params
    //   .subscribe(({ id }) => {
    //     this.paisService.getPaisById(id)
    //       .subscribe(pais => {

    //       })
    //   })


  }

}
