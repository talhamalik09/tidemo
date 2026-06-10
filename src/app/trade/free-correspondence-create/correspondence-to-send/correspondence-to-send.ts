import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';

import { NgIf, NgFor } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-correspondence-to-send',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './correspondence-to-send.html',
  styleUrl: './correspondence-to-send.scss'
})
export class CorrespondenceToSend {

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  form: FormGroup;

  correspondenceTypeOptions = [
    'General',
    'Query',
    'Answer',
    'Cancel Message Response'
  ];

  sendViaOptions = [
    'Internal',
    'Mail',
    'Email',
    'Telex',
    'Swift',
    'Telex Via Swift',
    'Fax',
    'Gateway'
  ];

  selectAddresseeOptions = [
    'Correspondent',
    '<--->'
  ];

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      correspondenceType: ['', Validators.required],

      sendVia: ['', Validators.required],

      selectAddressee: ['', Validators.required],

      addresseeCode: ['', Validators.required],

      addresseeDescription: ['', Validators.required],

      reference: ['', Validators.required],

      relatedReference: ['', Validators.required],

      isn: ['', Validators.required],

      timeStamp: ['', Validators.required],

      errorCode: ['', Validators.required],

      dateOfRelatedMessage: ['', Validators.required],

      instructionsToSend: ['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

}