import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-general-instructions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './general-instructions.html',
  styleUrls: ['./general-instructions.scss']
})
export class GeneralInstructions {

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      urcApply: [false],
      acknowledgeReceipt: [false],
      adviseNonAcceptance: [false],
      adviseAcceptance: [false],
      advisePayment: [false],
      adviseNonPayment: [false],
      holdDocumentsUntilArrival: [false],
      insureGoods: [false],
      warehouseGoods: [false],
      protestNonPayment: [false],
      insureAgainstFireOnly: [false],
      protestNonAcceptance: [false],
      allowPartPayments: [false]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }
}