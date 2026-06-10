import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-errors-warnings',
  standalone: true,
  imports: [NgIf],
  templateUrl: './errors-warnings.html',
  styleUrl: './errors-warnings.scss'
})
export class ErrorsWarnings {

  labels = LABELS;
  lang: 'en' = 'en';
  isOpen = true;

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}