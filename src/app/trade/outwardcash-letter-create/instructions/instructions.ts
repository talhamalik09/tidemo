import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-instructions',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './instructions.html',
  styleUrls: ['./instructions.scss']
})
export class Instructions{

  form: FormGroup;

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      instructionsReceived: ['', [Validators.maxLength(2000)]],
      instructionsToSend: ['', [Validators.maxLength(2000)]]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}