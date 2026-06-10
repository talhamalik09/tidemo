import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule,  } from '@angular/common';
import { FundService } from '../../fund'; // make sure path is correct
import { FormsModule } from '@angular/forms';
import { environment } from '../../../environment/environment';
import { LabelService } from '../../service/service';
import { RouterModule,Router  } from '@angular/router';


interface FundEntry {
  fullName: string;
  email: string;
  phone: string;
  cnic: string;
  address: string;
  fundAmount: number;
  startDate: string;
  endDate: string;
  paymentMethod: string;
  notes: string;
  password : string;
}

@Component({
  selector: 'app-fund-form',
  standalone: true,
  imports: [CommonModule,RouterModule, ReactiveFormsModule, FormsModule],
  templateUrl: './fund-form.html',
  styleUrls: ['./fund-form.scss'],
})
export class FundFormComponent {

  apiUrl = environment.apiUrl;

  labels: any ;
  extraFields: any[] = [];
  fundForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public fundService: FundService,
    public labelService : LabelService,
     private router: Router
  
  ) {
    this.fundForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      cnic: ['', [Validators.required, Validators.pattern(/^\d{13}$/)]],
      
      address: ['', Validators.required],
      fundAmount: ['', [Validators.required, Validators.min(1)]],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      paymentMethod: ['', Validators.required],
      notes: [''],
      password: ['', [
    Validators.required,
    Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/)
  ]]
      
    });
    console.log('API URL:', this.apiUrl);
  }

 
submitForm() {

  if (this.fundForm.valid) {


    // 🔥 EDIT MODE
    if (this.fundService.selectedIndex !== null) {

      const index = this.fundService.selectedIndex;

      const current = this.fundService.getEntries();
      current[index] = this.fundForm.value;

      this.fundService.setEntries([...current]);

      this.fundService.selectedIndex = null;
      this.fundService.selectedData = null;

      alert('Updated successfully!');

      this.fundForm.reset();

      // ✅ after update

    }

    // 🔥 ADD MODE
    else {

      this.fundService.addEntry(this.fundForm.value);

      alert('Form submitted successfully!');

      this.fundForm.reset();

      this.router.navigate(['/fund-table']); // ✅ after add
    }

    this.router.navigate(['/trade/fund-table']); 

  }

  else {
    alert('Please fill all fields correctly!');
  }
}
 addField() {
  this.extraFields.push({
    type: 'text',   // default
    value: '',
    options: ['Option 1', 'Option 2']     // for dropdown
  });
}

ngOnInit() {
  if (this.fundService.selectedData) {
    this.fundForm.patchValue(this.fundService.selectedData);
  }
}

}