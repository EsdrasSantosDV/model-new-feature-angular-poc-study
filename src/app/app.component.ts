import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { CommonModule } from '@angular/common';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { filter, iif, tap } from 'rxjs';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [RouterOutlet, SearchComponent, CommonModule],
})
export class AppComponent {
  searchInput = signal<string | null>(null);
  controlValid = signal<boolean>(true);

  //SO QUE LEMBRA DE UM SEGUINTE, SE VAI TER QUE USAR O SUPREMO PODER SEU DO RXJS, O BO DO TWO WAY, E QUE
  //PRA LOGICA COMPUTADA NO FINAL DAS CONTAS SEM LOGICA IMPERATIVA NO QUESITO DE SETAR NO SIGNAL, NÃO VAI TER COMO
  //VAMOS TENTAR FAZER O SEGUINTE, VAMOS NOS DESAFIAR A FAZER O SEGUINTE KK


  

  execValidation = toSignal(
    toObservable(this.searchInput).pipe(
      tap((valueControl) => {
        if (valueControl !== null && valueControl.length > 0) {
          this.controlValid.set(false);
        }
        else{
          this.controlValid.set(true)
        }
      })
    )
  );





  //SE EU MUDAR A PROPRIEDADE NO PAI  JA MUDA NO FILHO JA
}
