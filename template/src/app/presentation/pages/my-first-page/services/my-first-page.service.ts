import { Injectable } from '@angular/core';

@Injectable()
export class MyFirstPageService {

  constructor() { }

  getMessage(): string {
    return "Hello, I'm MyFirstPageService";
  }
}
