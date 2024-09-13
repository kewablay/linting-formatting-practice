import { Component } from '@angular/core';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.css'
})
export class NewComponentComponent {
  message: string = 'Welcome to the Sample Component!';

  constructor() {
    // Constructor is empty in this example
  }

  // Sample method
  greet(): void {
    alert(this.message);
  }
}
