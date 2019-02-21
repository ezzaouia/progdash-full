import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-error',
  template: `<div class="error">
    <h3>Quelque chose s'est mal passé. Nous travaillons pour que cela soit corrigé dès que possible. <br> 
      vous pourrez peut-être réessayer ou retourner a l'acceuil</h3>
    <button mat-raised-button (click)="goToHome()"> Retour a l'acceuil</button>
  </div>
  `,
  styles: [ `.error {
    width: 80%;
    margin: auto;
    text-align: center;
  }
  ` ],
})
export class ErrorComponent implements OnInit {
  constructor (private router: Router) { }

  ngOnInit (): void { }

  goToHome() {
    this.router.navigate(['/dash/prog'])
  }
}
