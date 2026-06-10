import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundService } from '../../fund';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fund-table',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule],
  templateUrl: './fund-table.html',
  styleUrl: './fund-table.scss'
})
export class FundTableComponent implements OnInit {

  entries: any[] = [];

  constructor(private fundService: FundService,
    private router: Router
  ) {}



  ngOnInit() {
    this.fundService.entries$.subscribe(data => {
      this.entries = data;
    });
  }
  


  // ✅ ADD THIS FUNCTION
  formatCSVValue(value: any): string {
    if (value == null) return '';

    const stringValue = value.toString();

    // Escape double quotes
    const escaped = stringValue.replace(/"/g, '""');

    // Wrap in quotes
    return `"${escaped}"`;
  }

  exportToCSV() {
    if (!this.entries || this.entries.length === 0) return;

    const headers = [
      'Full Name',
      'Email',
      'Phone',
      'CNIC',
      'Address',
      'Amount',
      'Start Date',
      'End Date',
      'Payment',
      'Notes',
      'Password'
    ];

    const rows = this.entries.map(entry => [
      this.formatCSVValue(entry.fullName),
      this.formatCSVValue(entry.email),
      this.formatCSVValue(entry.phone),
      this.formatCSVValue(entry.cnic),
      this.formatCSVValue(entry.address),
      this.formatCSVValue(entry.fundAmount),
      this.formatCSVValue(entry.startDate),
      this.formatCSVValue(entry.endDate),
      this.formatCSVValue(entry.paymentMethod),
      this.formatCSVValue(entry.notes),
      this.formatCSVValue(entry.password)
    ]);

    let csvContent =
      headers.join(',') + '\n' +
      rows.map(row => row.join(',')).join('\n');

    const blob = new Blob(
      ["\uFEFF" + csvContent],
      { type: 'text/csv;charset=utf-8;' }
    );

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'fund-entries.csv';
    link.click();

    window.URL.revokeObjectURL(url);
  }

  edit(i: number) {

  const data = this.fundService.getEntries()[i];

  // store selected row
  this.fundService.selectedData = data;

  // ✅ ADD THIS
  this.fundService.selectedIndex = i;

  // navigate to edit page
  this.router.navigate(['/edit-page', i]);
}
}