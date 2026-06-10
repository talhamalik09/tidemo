import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  imports: [FormsModule],
  templateUrl: './signup-form.html',
  styleUrl: './signup-form.scss',
})
export class SignupForm {


  email = '';
  password = '';

  constructor(private http: HttpClient) {}

  signup() {

    const data = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:8080/api/auth/signup', data)
      .subscribe(res => {
        console.log(res);
      });
  }
}
