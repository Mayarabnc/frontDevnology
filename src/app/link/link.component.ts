import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { LinkModel } from '../model/LinkModel';
import { LinkService } from '../service/link.service';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.css']
})
export class LinkComponent implements OnInit {

  nomeLink = environment.nomeLink
  link = environment.link
  linkS: LinkModel = new LinkModel()
  listaDeLinks: LinkModel[]

  constructor(
    private router: Router,
    private linkService: LinkService
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

  sair(){
    this.router.navigate(["/login"])
    environment.token = ""
    environment.id = 0
    environment.nome = ""
    environment.link = ""
    environment.nomeLink = ""
  }
}
