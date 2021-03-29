import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EncerramentoComponent } from './encerramento/encerramento.component';
import { MaterialModule } from './material/material.module';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PoliticaPrivacidadeComponent } from './politica-privacidade/politica-privacidade.component';
import { RegulamentoCampanhaComponent } from './regulamento-campanha/regulamento-campanha.component';




@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    RegulamentoCampanhaComponent,
    PoliticaPrivacidadeComponent,
    CadastroComponent,
    EncerramentoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
