import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LABELS } from '../../../localization/labels/labels';

@Component({
  selector: 'app-documentary-collection-log',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './documentary-collection-log.html',
  styleUrls: ['./documentary-collection-log.scss']
})
export class DocumentaryCollectionLog {

  form: FormGroup;

  labels = LABELS;
  lang: 'en' = 'en';

  isOpen = true;

  constructor(private fb: FormBuilder) {

    this.form = this.fb.group({

      receivedFromReference: ['', Validators.required],
      collectionAmount: ['', Validators.required],
      country: ['', Validators.required],
      sendToCountry: ['', Validators.required],
      drawerCountry: ['', Validators.required],

      receivedFromDetails: ['', Validators.maxLength(500)],
      sendToDetails: ['', Validators.maxLength(500)],
      drawerDetails: ['', Validators.maxLength(500)],

      documentRelease: ['', Validators.required],
      productType: ['', Validators.required],
      receivedFrom: ['', Validators.required],
      sendTo:['', Validators.required]

    });

  }

  toggleSection() {
    this.isOpen = !this.isOpen;
  }

  save() {
    console.log(this.form.value);
  }

}