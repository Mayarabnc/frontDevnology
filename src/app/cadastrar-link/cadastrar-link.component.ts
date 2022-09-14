import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { LinkModel } from '../model/LinkModel';
import { LinkService } from '../service/link.service';



@Component({
  selector: 'app-cadastrar-link',
  templateUrl: './cadastrar-link.component.html',
  styleUrls: ['./cadastrar-link.component.css']
})
export class CadastrarLinkComponent implements OnInit {

  linkS: LinkModel = new LinkModel()
  listaDeLinks: LinkModel[]

  constructor(
    private linkService: LinkService,
    private router: Router
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ""){
      alert("Sua seção expirou, faça o login novamente")
      this.router.navigate(["/login"])
    }

    this.findAllLinks()
  }

  findAllLinks(){
    this.linkService.getAllLinks().subscribe((resp: LinkModel[]) =>{ 
      this.listaDeLinks = resp
    })
  }

  cadastrar(){
    this.linkService.postLink(this.linkS).subscribe((resp: LinkModel) =>{ this.linkS = resp
      alert("Link cadastrado com sucesso!")
      this.findAllLinks()
      this.linkS = new LinkModel()
    })
      
  }
}
