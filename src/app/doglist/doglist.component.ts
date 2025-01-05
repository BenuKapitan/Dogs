import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Dog } from '../_models/dog.model';
import { DogService } from '../_services/dog.service';
import { DogcardComponent } from "../dogcard/dogcard.component";
import { Subscription } from 'rxjs';
import { NewDogButtonComponent } from "../new-dog-button/new-dog-button.component";

@Component({
  selector: 'app-doglist',
  standalone: true,
  imports: [DogcardComponent, NewDogButtonComponent],
  templateUrl: './doglist.component.html',
  styleUrl: './doglist.component.css'
})
export class DoglistComponent implements OnInit, OnDestroy {
  @Output() edit = new EventEmitter<Dog>();
  @Output() newDog = new EventEmitter<void>();

  dogs: Dog[] = [];
  private dogUpdateSubscription!: Subscription;

  constructor(private dogservice: DogService) {}

  ngOnInit() {
    this.fetchDogs();
    this.dogUpdateSubscription = this.dogservice.getDogUpdateListener().subscribe(() => {
      this.fetchDogs();
    });
  }

  fetchDogs() {
    this.dogservice.getDogs().subscribe({
      next: response => {this.dogs = response;},
      error: err => console.error(err)
    });
  }

  ngOnDestroy() {
    if (this.dogUpdateSubscription) {
      this.dogUpdateSubscription.unsubscribe();
    }
  }

  onEdit(dog: Dog) {
    this.edit.emit(dog);
  }

  onDelete(dog: Dog) {
    if(dog.id) {
      this.dogservice.deleteDog(dog.id).subscribe({
        next: () => {
          this.fetchDogs();
        },
        error: err => console.error(err)
      });
    }
  }

  onNewDog() {
    this.newDog.emit();
  }
}
