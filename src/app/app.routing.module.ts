//dependency
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//pages
import { CadastroComponent } from './cadastro/cadastro.component';
import { EncerramentoComponent } from './encerramento/encerramento.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { RegulamentoCampanhaComponent } from './regulamento-campanha/regulamento-campanha.component';



const routes: Routes = [
  {
    path: '',
    component: PaginaInicialComponent
  },
  {
    path: 'regulamento-campanha',
    component: RegulamentoCampanhaComponent
  },
  {
    path: 'politica-privacidade',
    component: PoliticaPrivacidadeComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'encerramento',
    component: EncerramentoComponent
  }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
