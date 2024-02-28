import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchComponent } from "./search/search.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, SearchComponent,CommonModule]
})
export class AppComponent {
  searchInput=signal<string | null>(null);


}
