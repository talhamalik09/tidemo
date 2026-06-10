import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-exportcredit-agency-facility',
  imports: [RouterModule],

  styleUrl: './exportcredit-agency-facility.scss',
  template:`
  <h3>Export Credit Agency<h3>
  <router-outlet></router-outlet>
  `
})
export class ExportcreditAgencyFacility {}
