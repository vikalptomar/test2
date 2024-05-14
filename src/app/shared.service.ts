import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor() {
    console.log('http');
  }

  mySharedFunction() {
    console.log('My shared Function is called');
  }
}
