import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Basic routing in angular</h1>

    <ul>
      <li><a routerLink="/login">Login</a></li>
      <li><a routerLink="/about">About</a></li>
    </ul>
  `
})
export class Home {}