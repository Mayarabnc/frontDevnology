import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarLinkComponent } from './cadastrar-link/cadastrar-link.component';
import { CadastrarUsuarioComponent } from './cadastrar-usuario/cadastrar-usuario.component';
import { DeletarLinkComponent } from './deletar-link/deletar-link.component';
import { EditarLinkComponent } from './editar-link/editar-link.component';
import { LinkComponent } from './link/link.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:'', redirectTo: 'login', pathMatch: 'full'},
  {path:'cadastrar', component: CadastrarLinkComponent},
  {path:'editar/:id', component: EditarLinkComponent},
  {path:'deletar/:id', component: DeletarLinkComponent},
  {path:'link', component: LinkComponent},
  {path:'login', component:LoginComponent},
  {path:'cadastrarUser', component: CadastrarUsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
