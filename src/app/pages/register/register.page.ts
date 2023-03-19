import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  email: string = '';
  password: string = '';
  

  constructor(private authService: AuthenticationService, private navCtrl: NavController) {}

  async register() {
    try {
      await this.authService.signUp(this.email, this.password);
      this.navCtrl.navigateRoot('/home');
    } catch (error) {
      console.log('Error:', error);
    }
  }
}
