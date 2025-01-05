import { Component, ElementRef, EventEmitter, Input, OnInit, Output, OnDestroy } from '@angular/core';
import { Dog } from '../_models/dog.model';
import { Breeds, getBreeds } from '../_models/breeds.enum';
import { CommonModule, NgFor } from '@angular/common';

declare var bootstrap: any;

@Component({
  selector: 'app-dog-form',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './dog-form.component.html',
  styleUrl: './dog-form.component.css'
})
export class DogFormComponent implements OnInit, OnDestroy {
  @Input() dog!: Dog;
  @Output() save: EventEmitter<Dog> = new EventEmitter<Dog>();
  @Output() cancel: EventEmitter<void> = new EventEmitter<void>();

  private modalInstance!: any;
  breeds: Breeds[] = getBreeds();

  constructor(private element: ElementRef) { }

  ngOnInit() {
    this.scrollToBottom();
    this.lockScroll();
  }

  ngOnDestroy() {
    this.unlockScroll();
  }

  saveDog() {
    if (!this.dog.image || this.dog.image.trim() === '') {
      this.dog.image = 'https://i1.sndcdn.com/artworks-YDgU6KNf10zHzK95-XXS6RQ-t1080x1080.jpg';
  }
    this.save.emit(this.dog);
    this.unlockScroll();

  }

  cancelDog() {
    this.cancel.emit();
    this.unlockScroll();
  }

  GetValue(event: any) {
    return event.target.value;
  }

  private scrollToBottom() {
    window.scrollTo(0, document.body.scrollHeight);
  }

  private lockScroll() {
    document.body.style.overflow = 'hidden';
  }

  private unlockScroll() {
    document.body.style.overflow = 'auto';
  }
}
