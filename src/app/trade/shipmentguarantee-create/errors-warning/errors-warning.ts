import { Component } from '@angular/core';
import { LABELS } from '../../../localization/labels/labels';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-errors-warning',
  standalone: true,
  imports: [NgIf],
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