import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dog } from '../_models/dog.model';
import { Observable,Subject,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DogService {
  unsubscribe() {
    throw new Error('Method not implemented.');
  }
  private dogUrl = 'http://localhost:3000/dogs';

  private dogsUpdated = new Subject<void>();

  constructor(private http: HttpClient) {}

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>(this.dogUrl);
  }

  addDog(dog: Dog): Observable<Dog> {
      return this.http.post<Dog>(this.dogUrl, dog).pipe(tap(() => this.dogsUpdated.next())
    );
  }

  updateDog(dog: Dog): Observable<Dog> {
    return this.http.patch<Dog>(`${this.dogUrl}/${dog.id}`, dog).pipe(tap(() => this.dogsUpdated.next())
    );
  }
  deleteDog(id: number): Observable<Dog> {
    return this.http.delete<Dog>(`${this.dogUrl}/${id}`);
  }
  getDogUpdateListener(): Observable<void> {
    return this.dogsUpdated.asObservable();
  }
  static emptyDog(): Dog {
    return {
      breed: [],
      size: '',
      image: ''
    };
  }

  

}
