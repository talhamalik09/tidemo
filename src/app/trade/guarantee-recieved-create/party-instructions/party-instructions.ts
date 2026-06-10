import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-party-instructions',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './party-instructions.html',
  styleUrls: ['./party-instructions.scss']
})
export class PartyInstructions{

  form: FormGroup;

  labels = LABELS;

  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      instructionsFromInstructingParty: ['', Validators.required],
      instructionToNextParty: ['', Validators.required],
      additionalInformationForNextParty: ['', Validators.required],
      responseToReceivedFromParty: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}