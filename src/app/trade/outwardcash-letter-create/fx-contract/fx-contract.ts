import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-fx-contract',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fx-contract.html',
  styleUrls: ['./fx-contract.scss']
})
export class FxContract {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}