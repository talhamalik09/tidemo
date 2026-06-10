import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-guarantee-issued',
  imports: [RouterModule],
  template: `
    <h3>guarnatee issued</h3>
    <router-outlet></router-outlet>
  `,
  styleUrl: './guarantee-issued.scss',
})
export class GuaranteeIssued {}
