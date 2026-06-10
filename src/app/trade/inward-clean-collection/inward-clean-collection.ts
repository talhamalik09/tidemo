import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-inward-clean-collection',
  imports: [RouterOutlet],
  
  styleUrl: './inward-clean-collection.scss',
  template:`
  <router-outlet></router-outlet>`
})
export class InwardCleanCollection {}
