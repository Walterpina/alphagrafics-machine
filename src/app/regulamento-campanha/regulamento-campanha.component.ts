import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'alpha-regulamento-campanha',
  templateUrl: './regulamento-campanha.component.html',
  styleUrls: ['./regulamento-campanha.component.css']
})
export class RegulamentoCampanhaComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router) { }

  termChecked = false;

  ngOnInit(): void {
  }

  goToPolicies() {
    this.router.navigate(['/politica-privacidade', {birthday: this.activatedRoute.snapshot.params.birthday}]);
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
