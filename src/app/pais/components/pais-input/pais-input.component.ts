import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))   //Añade una espera de 300ms antes de enviar el subcribe
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      })
  }

  buscar() {
    this.onEnter.emit(this.termino); //Necesitamos emitir el evento indicado como @Output
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }


}
