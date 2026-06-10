import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-shipment-guarantee',
  imports: [RouterModule],
   template: `
    <h3>shipment guarnatee</h3>
    <router-outlet></router-outlet>
  `,
  styleUrl: './shipment-guarantee.scss',
})
export class ShipmentGuarantee {}
