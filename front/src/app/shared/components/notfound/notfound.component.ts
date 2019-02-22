import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-notfound',
  template: `
    <div class="page-404">
      <div class="error">
        <div>4</div>
        <div>0</div>
        <div>4</div>
      </div>
      <h2>Page non trouvée.</h2>
      <button mat-raised-button (click)="goToHome()"> Retour a l'acceuil</button>
    </div>
  `,
  styles: [ `
    .page-404 {
      text-align: center;
    }
    .error {
      clear: both;
      width: 511px;
      margin: 50px auto 0;
      display: inline-block;
    }
    .error div{
      float: left;
      border-radius: 50%;
      padding: 9px 50px;
      margin: 1px;
      background: #07B3F9;
      color: white;
      font-size: 120px;
      font-weight: bold;
  }
    h2 {
      clear: both;
      color: #A2A2A2;
    }` ],
})
export class NotFoundComponent {
  constructor (private router: Router) { }

  goToHome() {
    this.router.navigate(['/suivi'])
  }
}
