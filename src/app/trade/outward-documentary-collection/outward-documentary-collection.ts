import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-outward-documentary-collection',
  imports: [RouterOutlet],
  template: `
    <h3>Outward Documentary Collection</h3>
    <router-outlet></router-outlet>
  `,
  styleUrl: './outward-documentary-collection.scss',
})
export class OutwardDocumentaryCollection {}
