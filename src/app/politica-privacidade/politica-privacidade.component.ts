import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'alpha-politica-privacidade',
  templateUrl: './politica-privacidade.component.html',
  styleUrls: ['./politica-privacidade.component.css']
})
export class PoliticaPrivacidadeComponent implements OnInit {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  termChecked = false;

  ngOnInit(): void {
  }

  goToRegister() {
    this.router.navigate(['/cadastro', {birthday: this.activatedRoute.snapshot.params.birthday}]);
  }

  check() {
    console.log("cliquei no check")
    if(this.termChecked) {
      this.termChecked = false;
    } else {
      this.termChecked = true;
    }
  }

}
