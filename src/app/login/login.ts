import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl:'login.scss'
})
export class Login {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}   // ✅ REQUIRED

  login() {
    if (this.username === 'admin' && this.password === '1234') {
      this.router.navigate(['/newpage']);  // ✅ works now
    } 
    else if(this.username === 'user1' && this.password === '5678'){
     this.router.navigate(['/trade']);
    }
    else {
      alert('Invalid username or password');
    }
  }
}