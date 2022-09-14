import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmeSenha: string

  constructor(
    private auth:AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmarSenha(event: any){
    this.confirmeSenha = event.target.value
  }

  cadastrar(){
    if(this.usuario.senha != this.confirmeSenha){
      alert("As senhas estão diferentes")
    }else{
      this.auth.cadastrar(this.usuario).
          //trasforma em Json
      subscribe((resp: Usuario) => [
        this.usuario = resp,
        this.router.navigate(["/login"]),
        alert("Usuário cadastrado com sucesso!")
      ])
    }
  }

}
