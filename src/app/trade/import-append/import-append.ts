import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-import-append',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './import-append.html',
  styleUrl: './import-append.scss',
})
export class ImportAppend {

 id: string | null = null;

  items = [
    { id: 1, name: 'Item A' },
    { id: 2, name: 'Item B' }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }
}

