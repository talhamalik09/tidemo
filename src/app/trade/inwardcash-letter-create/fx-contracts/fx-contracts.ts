import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-fx-contracts',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './fx-contracts.html',
  styleUrls: ['./fx-contracts.scss']
})
export class FxContracts {

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}