import { Component } from '@angular/core';
import { LABELS } from '../../../localization/labels/labels';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-errors-warning',
  standalone: true,
  imports: [],
  templateUrl: './errors-warning.html',
  styleUrl: './errors-warning.scss'
})
export class ErrorsWarning {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}