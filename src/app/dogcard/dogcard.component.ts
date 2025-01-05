import { Component,EventEmitter,Input,Output } from '@angular/core';
import { Dog } from '../_models/dog.model';

@Component({
  selector: 'app-dogcard',
  standalone: true,
  imports: [],
  templateUrl: './dogcard.component.html',
  styleUrl: './dogcard.component.css'
})
export class DogcardComponent {
  @Input() dog!: Dog;
  @Output() edit = new EventEmitter<Dog>();
  @Output() delete = new EventEmitter<Dog>();
  
  onEdit() {
    this.edit.emit(this.dog);
  }
  onDelete() {
    this.delete.emit(this.dog);
  }
}
