import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private afAuth: AngularFireAuth) {}

  async signUp(email: string, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async signIn(email: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(email, password);
      return result;
    } catch (error) {
      throw error;
    }
  }

  async signOut() {
    try {
      await this.afAuth.signOut();
    } catch (error) {
      throw error;
    }
  }

  async resetPassword(email: string) {
    try {
      await this.afAuth.sendPasswordResetEmail(email);
    } catch (error) {
      throw error;
    }
  }
  getAuthState() {
    return this.afAuth.authState;
  }
  
}

