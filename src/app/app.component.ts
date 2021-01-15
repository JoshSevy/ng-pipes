import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';

  onNameChange(value: string): void {
    this.name = value;
  }

  onDateChange(value: string): void {
    this.date = value;
  }
}
