import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-clean-bankers-acceptance',
  imports: [RouterModule],
  
  
  template: `
    <h3>clean BA Details</h3>
    <router-outlet></router-outlet>
  `,
  styleUrl: './clean-bankers-acceptance.scss'
})
export class CleanBankersAcceptance {}
