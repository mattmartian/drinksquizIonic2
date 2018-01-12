import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Answer } from '../../models/answer';
import { Question } from '../../models/question';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
import { DataService } from '../../providers/data-service';
import { Session } from '../../providers/session';
import { CompleteDetailPage } from '../complete-detail/complete-detail';
import { ToastController } from 'ionic-angular';
/*
  Generated class for the Questions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage {
  answers: any[];
  currentQuestion: number;
  question: Question;
  choosenAnswer: any;

  constructor(
    private dataService: DataService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public session: Session,
    public toastCtrl: ToastController
  ) {
    this.currentQuestion = navParams.get("questionId");
    //this.answers = this.dataService.getAnswerFor(1);
    if (this.currentQuestion === 0) {
      this.session.clear();
    }
    let question = this.dataService.getQuestion(this.currentQuestion);
    this.answers = question.answers;
    this.question = Object.assign({}, question);

  }

  ionViewDidLoad() {

  }

  nextQuestion() {
    if (this.choosenAnswer) {
      this.answerAlert();
    } else {
      const toast = this.toastCtrl.create({
        message: 'Please pick tap on an answer',
        showCloseButton: true,
        closeButtonText: 'Ok',
        duration: 1000
      });
      toast.present();
    }
  }

  goHome() {
    let confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'If you return home, your answers will not be saved. Are you sure you would like to return?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
          }
        }
      ]
    });
    confirm.present();

  }

  answerAlert() {
    this.question.choosenAnswer = this.choosenAnswer;
    let confirm = this.alertCtrl.create({
      title: this.question.choosenAnswer === this.question.answer ? "Amazing!":"Nice Try",
      message: this.question.choosenAnswer === this.question.answer ? (this.question.answer + "tsp is the correct answer!"):("There is actually " + this.question.answer + "tsp in " + this.question.drink),
      buttons: [
        {
          text: 'Next',
          handler: () => {
            this.session.add(this.question);
            if (this.currentQuestion <= 8) {
              this.navCtrl.push(QuestionsPage, { questionId: this.currentQuestion + 1 });
            } else {
              this.navCtrl.setRoot(CompleteDetailPage);
            }
          }
        }
      ]
    });
    confirm.present();

  }

}
