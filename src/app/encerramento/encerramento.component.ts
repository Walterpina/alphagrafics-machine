import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'alpha-encerramento',
  templateUrl: './encerramento.component.html',
  styleUrls: ['./encerramento.component.css']
})

export class EncerramentoComponent implements OnInit{

  public myAngularxQrCode: string = null; //publicação ao fim de um qrcode

  constructor(private activatedRoute:ActivatedRoute) {
    this.myAngularxQrCode = this.activatedRoute.snapshot.params.token
  }

  ngOnInit():void {

  }
}
