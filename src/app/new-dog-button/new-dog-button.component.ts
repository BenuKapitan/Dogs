import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-dog-button',
  standalone: true,
  imports: [],
  templateUrl: './new-dog-button.component.html',
  styleUrl: './new-dog-button.component.css'
})
export class NewDogButtonComponent {
  @Output() newDog: EventEmitter<void> = new EventEmitter<void>();

  onClick() {
    this.newDog.emit();
  }
}
