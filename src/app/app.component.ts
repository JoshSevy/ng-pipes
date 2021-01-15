import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  paymentDate: string = '';
  paymentAmount: number = 0;

  onNameChange(value: string): void {
    this.name = value;
  }

  onDateChange(value: string): void {
    this.paymentDate = value;
  }

  onAmountChange(value: string): void {
    this.paymentAmount = parseFloat(value);
  }
}
