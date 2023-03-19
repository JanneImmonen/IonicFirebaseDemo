import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  async login() {
    try {
      const result = await this.authService.signIn(this.email, this.password);
      console.log('Login successful:', result);
    } catch (error) {
      console.error('Error during login:', error);
    }
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
