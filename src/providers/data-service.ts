import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import { SQLite } from 'ionic-native';
import { Answer } from '../models/answer';
import { Question } from '../models/question';
import { Session } from './session'
import { PrepopData } from '../db/drinksdb';
import { Platform } from 'ionic-angular';

import 'rxjs/add/operator/map';

/*
  Generated class for the DataService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataService {
  //public database: SQLite;
  tempQuestions: Question[];
  questions: Question[] = [
    {
      "id": 1,
      "question": "How much sugar is in this",
      "drink": "Energy Drink",
      "answer": "12",
      "quantity": "500mL",
      "image": "./assets/images/energyDrink.png",
      "choosenAnswer": "",
      "answers": ["12", "0", "5", "20"]
    }, {
      "id": 2,
      "question": "How much sugar is in this",
      "drink": "Can of Orange Pop",
      "answer": "10",
      "quantity": "355mL",
      "image": "./assets/images/OrangePopSized.png",
      "choosenAnswer": "",
      "answers": ["15", "30", "5", "10"]
    }, {
      "id": 3,
      "question": "How much sugar is in this",
      "drink": "Small Chocolate Milk",
      "answer": "3",
      "quantity": "237mL",
      "image": "./assets/images/ChocolateMilkSized.png",
      "choosenAnswer": "",
      "answers": ["3", "5", "10", "15"]
    }, {
      "id": 4,
      "question": "How much sugar is in this",
      "drink": "Can of Iced tea",
      "answer": "6",
      "quantity": "355mL",
      "image": "./assets/images/IcedTeaSized.png",
      "choosenAnswer": "",
      "answers": ["6", "15", "50", "30"]
    }, {
      "id": 5,
      "question": "How much sugar is in this",
      "drink": "Sports Drink",
      "answer": "10",
      "quantity": "700mL",
      "image": "./assets/images/sportsdrink.png",
      "choosenAnswer": "",
      "answers": ["0", "5", "10", "20"]
    }, {
      "id": 6,
      "question": "How much sugar is in this",
      "drink": "Cola",
      "answer": "12",
      "quantity": "591mL",
      "image": "./assets/images/Coke.png",
      "choosenAnswer": "",
      "answers": ["12", "5", "6", "20"]
    }, {
      "id": 7,
      "question": "How much sugar is in this",
      "drink": "Slushy",
      "answer": "12",
      "quantity": "500mL",
      "image": "./assets/images/slushie-sized.png",
      "choosenAnswer": "",
      "answers": ["50", "12", "9", "42"]
    }, {
      "id": 8,
      "question": "How much sugar is in this",
      "drink": "Box of orange juice",
      "answer": "5",
      "quantity": "200mL",
      "image": "./assets/images/OrangeBoxSized.png",
      "choosenAnswer": "",
      "answers": ["4", "18", "5", "10"]
    }, {
      "id": 9,
      "question": "How much sugar is in this",
      "drink": "Small box of chocolate soy beverage",
      "answer": "4",
      "quantity": "250mL",
      "image": "./assets/images/ChocolateSoyMilkSized.png",
      "choosenAnswer": "",
      "answers": ["4", "3", "11", "22"]
    }, {
      "id": 10,
      "question": "How much sugar is in this",
      "drink": "Ice Cappuccino",
      "answer": "9",
      "quantity": "500mL",
      "image": "./assets/images/icedCapp.png",
      "choosenAnswer": "",
      "answers": ["8", "25", "16", "9"]
    }, {
      "id": 11,
      "question": "How much sugar is in this",
      "drink": "Small Hot Chocolate",
      "answer": "9",
      "quantity": "286mL",
      "image": "./assets/images/hotchocolate.png",
      "choosenAnswer": "",
      "answers": ["9", "11", "20", "17"]
    }, {
      "id": 12,
      "question": "How much sugar is in this",
      "drink": "Fruit Punch",
      "answer": "10",
      "quantity": "355mL",
      "image": "./assets/images/fruitPunch.png",
      "choosenAnswer": "",
      "answers": ["10", "31", "12", "2"]
    }, {
      "id": 13,
      "question": "How much sugar is in this",
      "drink": "Clear Pop",
      "answer": "9",
      "quantity": "355mL",
      "image": "./assets/images/ClearPop.png",
      "choosenAnswer": "",
      "answers": ["9", "29", "12", "10"]
    }, {
      "id": 14,
      "question": "How much sugar is in this",
      "drink": "Milk Shake",
      "answer": "12",
      "quantity": "473mL",
      "image": "./assets/images/milkshake.png",
      "choosenAnswer": "",
      "answers": ["8", "12", "19", "3"]
    }, {
      "id": 15,
      "question": "How much sugar is in this",
      "drink": "Vitamin Water",
      "answer": "8",
      "quantity": "591mL",
      "image": "./assets/images/vitaminwater.png",
      "choosenAnswer": "",
      "answers": ["10", "43", "50", "8"]
    }, {
      "id": 16,
      "question": "How much sugar is in this",
      "drink": "Can of Lemonade",
      "answer": "10",
      "quantity": "355mL",
      "image": "./assets/images/lemonade.png",
      "choosenAnswer": "",
      "answers": ["10", "32", "44", "19"]
    }, {
      "id": 17,
      "question": "How much sugar is in this",
      "drink": "Can of root beer",
      "answer": "10",
      "quantity": "355mL",
      "image": "./assets/images/rootBeer.png",
      "choosenAnswer": "",
      "answers": ["22", "10", "41", "5"]
    }, {
      "id": 18,
      "question": "How much sugar is in this",
      "drink": "Small bottle of Cranberry Juice Drink/Cocktail",
      "answer": "13",
      "quantity": "450mL",
      "image": "./assets/images/cranberryJuice.png",
      "choosenAnswer": "",
      "answers": ["34", "45", "13", "56"]
    }, {
      "id": 19,
      "question": "How much sugar is in this",
      "drink": "Cool Fruit Punch",
      "answer": "4",
      "quantity": "180mL",
      "image": "./assets/images/koolaid.png",
      "choosenAnswer": "",
      "answers": ["4", "42", "24", "11"]
    }
  ];

  waterQuestion: Question = {
    "id": 20,
    "question": "How much sugar is in this",
    "drink": "Bottle of water",
    "answer": "0",
    "quantity": "any",
    "image": "./assets/images/waterbottle.png",
    "choosenAnswer": "",
    "answers": ["12", "33", "14", "0"]
  }
  constructor(public platform: Platform, public http: Http, public session: Session) {
    /*platform.ready().then(() => {
      this.database = new SQLite();
      this.database.openDatabase({ name: "data.db", location: "default" })
        .then(() => {

          return this.database.sqlBatch(PrepopData)
            .then((data) => {
              console.log("TABLE CREATED: ", data);
            }, (error) => {
              console.error("Unable to execute sql", error);
            })
        }, (error) => {
          console.log(error);
        }).then(() => {
          this.database.executeSql(`SELECT
          Questions.questionId ,
          question,
          drink,
          image,
          quantity,
          (select value from Answers where Questions.actualAnswer = Answers.answerId) as actualAnswer,
          (select group_concat(value, ',' )  from Answers where Answers.questionId = Questions.questionId) as possibleAnswers
          FROM Questions`, []).then((res) => {
              console.log(res);
              this.questions = [];
              if (res.rows.length > 0) {
                for (var i = 0; i < res.rows.length; i++) {
                  let item = res.rows.item(i);
                  if (item.actualAnswer) {
                    this.questions.push({
                      id: item.questionId,
                      question: item.question,
                      drink: item.drink,
                      answer: item.actualAnswer,
                      quantity: item.quantity,
                      image: "./assets/images/"+item.image,
                      choosenAnswer: "",
                      answers: item.possibleAnswers.split(',')
                    });
                  }
                }
              }
            }, (error) => {
              console.log(error);
            })
        });
    });*/
  }

  getQuestions(): Question[] {
    return this.questions
  }

  getQuestion(questionNumber: Number): Question {
    let remainingQuestions: Question[] = [];
    let answeredQuestions = this.session.all();

    if (questionNumber === 9) {
      return this.waterQuestion;
    }

    for (let question of this.questions) {
      let isPresent = false;
      if (answeredQuestions.length > 0) {
        for (let answeredQuestion of answeredQuestions) {
          if (question.id === answeredQuestion.id) {
            isPresent = true;
          }
        }
      }
      if (!isPresent) {
        remainingQuestions.push(question);
      }
    }

    let randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    return remainingQuestions[randomIndex];
    //return this.question;

  }

}
