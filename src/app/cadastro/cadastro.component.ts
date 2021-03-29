import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'alpha-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  message = "";
  errorMessage = "";

  consumer = {
    "nome": "",
    "nascimento": "",
    "email": "",
    "telefone": ""
  }

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToFinished() {
    this.router.navigate(['/encerramento', {birthday: this.activatedRoute.snapshot.params.birthday}])
  }

  phoneValid(){
    var phoneRegex = /^\(?([0-9]{2})\)?([0-9]{5})([0-9]{4})$/;
    if(String(this.consumer.telefone).match(phoneRegex)){
      return true
    }else{
      return false
    }
  }

  emailValid(){
    var emailRegex = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
    if(String(this.consumer.email).match(emailRegex)){
      return true
    }else{
      return false
    }
  }
}
