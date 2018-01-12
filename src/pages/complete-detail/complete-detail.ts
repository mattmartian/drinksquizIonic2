import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Session } from '../../providers/session';
import { Question } from '../../models/question';

/*
  Generated class for the CompleteDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-complete-detail',
  templateUrl: 'complete-detail.html'
})
export class CompleteDetailPage {
  questions: Question[]

  constructor(public navCtrl: NavController, public navParams: NavParams, public session: Session) {
    this.questions = session.all();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompleteDetailPage');
  }

  goHome() {
    this.navCtrl.setRoot(HomePage);
  }

}
