import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class SearchComponent {

  formInput=model.required<string | null>({alias:'inputControl'})
  validControl=model.required<boolean>({alias:'validControl'})

  setEsdras() {
    //NO FILHO AGORA
    this.formInput.set("Esdras");
    }

  
  /*
    dessa forma conseguimos realizar two way data binding de forma muito mais simples e reativa, com o model
    ligamos esse signal no signal do pai, agora as possibilidades são gigantescas
    agora vamos começar a brincadeira
    pensando nas possibildiades possivel

    realizar componentes genericos de forma simples,vamos tentar fazer esse componente ficar um componente de search,
     poderoso e vendo como o rxjs vai funfar nisso

  */
}
