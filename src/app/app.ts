import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FundFormComponent } from './trade/fund-form/fund-form';
import { FundTableComponent } from './trade/fund-table/fund-table';


@Component({
  selector: 'app-root',
  standalone: true,   // ✅ IMPORTANT (add this if missing)
  imports: [RouterOutlet,],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']   // ✅ FIXED (plural)
})
export class App {
  protected readonly title = signal('bank-bank');

}