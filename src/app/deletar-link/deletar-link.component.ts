import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { LinkModel } from '../model/LinkModel';
import { LinkService } from '../service/link.service';

@Component({
  selector: 'app-deletar-link',
  templateUrl: './deletar-link.component.html',
  styleUrls: ['./deletar-link.component.css']
})
export class DeletarLinkComponent implements OnInit {

  link: LinkModel = new LinkModel()
  idLink: number
  constructor(
    private linkService: LinkService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(){
    if(environment.token == ""){
      this.router.navigate(['/login'])
    }

    this.idLink = this.route.snapshot.params["id"]
    this.findByIdLink(this.idLink)
  }

  findByIdLink(id: number){
    this.linkService.getByIdLink(id).subscribe((resp: LinkModel) =>{
      this.link = resp
    })
  }

  deletar(){
    this.linkService.deleteLink(this.idLink).subscribe(() =>{
      alert("Link deletado com sucesso")
      this.router.navigate(["/link"])
    })
  }

}
