
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FundService, } from '../fund';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-userpage',
   standalone:true,
   imports : [CommonModule,ReactiveFormsModule,FormsModule,RouterModule],
  templateUrl: './userpage.html',
  styleUrls: ['./userpage.css']
})
export class UserPage implements OnInit{
  users: any[] = [];

  startDate: string = '';
  endDate: string = '';
  selectedDate: string = '';

  isSidebarOpen = true;

  // Toggle sidebar
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  constructor(private router: Router ,private fundService: FundService,
    
  ) {}
    goToForm() {
    this.router.navigate(['/fund-form']);
  }

  goToTable() {
    this.router.navigate(['/fund-table']);
  }
  goToHomePage() {
    this.router.navigate(['/home-page']);
  }
  goToTradePage(){
    this.router.navigate(['trade']);
  }
  users$!: Observable<any[]>;
  
   ngOnInit() {
    // ✅ GET DATES FROM SERVICE
    this.startDate = this.fundService.startDate;
    this.endDate = this.fundService.endDate;

   // this.users$ = this.fundService.loadUserss();

    this.users$ = this.fundService.loadUserss();

this.users$.subscribe(data => {
  console.log(data);
});

  
}
}
