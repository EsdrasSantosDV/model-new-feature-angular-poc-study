import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { CommonModule } from '@angular/common';
import {toSignal,toObservable} from '@angular/core/rxjs-interop'
import { filter, tap } from 'rxjs';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SearchComponent,CommonModule]
})
export class AppComponent {
  searchInput=signal<string | null>(null);
  controlValid=signal<boolean>(true);
  execValidation=toSignal(toObservable(this.searchInput).pipe(
    filter((valueControl)=>{
      if(valueControl !==null && valueControl.length > 0)
      {
        return true
      }
      return false;
    }),
    tap(()=>this.controlValid.set(false))
  ))
  
  //SE EU MUDAR A PROPRIEDADE NO PAI  JA MUDA NO FILHO JA

}
