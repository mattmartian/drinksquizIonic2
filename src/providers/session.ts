import { Injectable } from '@angular/core';
import { Question } from '../models/question'
import 'rxjs/add/operator/map';

/*
  Generated class for the Session provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Session {

  currentAnswers : Question[] = [];

  constructor() {

  }

  add(question: Question) {
    this.currentAnswers.push(question);
  }

  all() : Question[]{
    return this.currentAnswers;
  }

  clear() {
    this.currentAnswers = [];
  }

}
