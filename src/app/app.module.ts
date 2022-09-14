import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastrarLinkComponent } from './cadastrar-link/cadastrar-link.component';
import { EditarLinkComponent } from './editar-link/editar-link.component';
import { LinkComponent } from './link/link.component';
import { LoginComponent } from './login/login.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { DeletarLinkComponent } from './deletar-link/deletar-link.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarLinkComponent,
    EditarLinkComponent,
    LinkComponent,
    LoginComponent,
    CadastrarUsuarioComponent,
    DeletarLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
