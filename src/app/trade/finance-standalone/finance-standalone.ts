import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-finance-standalone',
  imports: [RouterModule],
  template: `
    <h3>Finance Standalone</h3>
    <router-outlet></router-outlet>
  `,
  styleUrl: './finance-standalone.scss',
})
export class FinanceStandalone {}
