import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor() { }

    getLocation(): Observable<{ id: string; name: string }[]> {
    // Mocked data - replace with real API call if needed
    const locations = [
      { id: '1', name: 'New York Facility' },
      { id: '2', name: 'Los Angeles Plant' },
      { id: '3', name: 'Chicago Warehouse' },
      { id: '4', name: 'Houston Office' }
    ];

    return of(locations); // Using RxJS 'of' to simulate an observable
  }
}
