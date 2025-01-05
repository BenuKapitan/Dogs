import { Component } from '@angular/core';
import { Dog } from './_models/dog.model';
import { DogService } from './_services/dog.service';
import { DoglistComponent } from './doglist/doglist.component';
import { DogFormComponent } from './dog-form/dog-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    DoglistComponent,
    DogFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kutyak';
  newDog: boolean = false;
  showNewDogForm: boolean = false;
  SelectedDog: Dog = DogService.emptyDog();

  constructor(private dogService: DogService) { }
  dogEdit(dog: Dog) {
    this.showNewDogForm = true;
    this.SelectedDog = dog;
  }
  cancel() {
    this.SelectedDog = DogService.emptyDog();
    this.showNewDogForm = false;
  }
  BtnNewDog() {
    this.SelectedDog = DogService.emptyDog();
    this.showNewDogForm = true;
    this.newDog = true;
  }
  saveDog(dog: Dog) {
    if (this.newDog) {
      this.dogService.addDog(dog).subscribe({
        next: () => {
          this.showNewDogForm = false;
        },
        error: error => {
          console.error(':(', error);
        }
      });
    } else {
      this.dogService.updateDog(dog).subscribe({
        next: () => {
          this.showNewDogForm = false;
          this.SelectedDog = DogService.emptyDog();
        },
        error: error => {
          console.error(':(', error); 
        }
      });
    }
    this.SelectedDog = DogService.emptyDog();
    this.showNewDogForm = false;
  }
}
