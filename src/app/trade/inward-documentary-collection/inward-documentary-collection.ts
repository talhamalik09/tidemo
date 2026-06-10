import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-inward-documentary-collection',
  imports: [RouterOutlet],
  
  styleUrl: './inward-documentary-collection.scss',
  template:`
  <router-outlet></router-outlet>`
})
export class InwardDocumentaryCollection {}
