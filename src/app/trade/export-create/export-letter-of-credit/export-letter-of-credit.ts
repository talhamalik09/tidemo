import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-export-letter-of-credit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './export-letter-of-credit.html',
  styleUrl: './export-letter-of-credit.scss'
})
export class ExportLetterOfCredit {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      sendersReference: ['', Validators.required],
      adviseBy: ['', Validators.required],
      adviseDate: ['', Validators.required],
      issueDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
      productType: ['', Validators.required],

      transferable: [false],
      throughCredit: [false],
      domesticExpiry: [false],
      operative: [false],
      revolving: [false],
      irrevocable: [false],

      preadviceDate: ['', Validators.required],
      expiryPlace: ['', Validators.required]
    });
  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {
    if (this.form.valid) {
      console.log('Export LC:', this.form.value);
    }
  }
}