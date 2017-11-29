import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public password: string;

  constructor() {
    this.password = this.generatePassword(16);
  }

  public onClick_Generate(): void {
    this.password = this.generatePassword(16);
  }

  public generatePassword(length: number): string {
    let text: string = "";
    const possible: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[];',./{}:|<>?";

    for (let i: number = 0; i < length; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
