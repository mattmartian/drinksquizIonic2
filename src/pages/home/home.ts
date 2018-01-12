import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { QuestionsPage } from '../questions/questions';
import { DataService } from '../../providers/data-service';
import { Storage } from '@ionic/storage';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  data: any;
  count: number = 0;
  storage: Storage;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              dataService: DataService,
              storage: Storage) {
    this.data = dataService.getQuestions();
    this.storage = storage;
  }

  ionViewDidEnter() {
    this.storage.ready().then(() => {
      this.storage.get('count').then((val) => {
        this.count = ++val;
        this.storage.set('count', this.count);
      })
     });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    // navigate to the new page if it is not the current page
    this.navCtrl.setRoot(QuestionsPage, { questionId: 0 });
  }

  resetCount() {
    let confirm = this.alertCtrl.create({
      title: 'Please input a passcode to reset the count',
      message: '',
      inputs: [
        {
          name: 'passcode',
          placeholder: 'passcode',
          type: 'password'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
          }
        },
        {
          text: 'Yes',
          handler: (data) => {
            if (data.passcode == 173823){
              this.storage.ready().then(() => {
                  this.storage.set('count', 0);
               });
              this.count = 0;
            }
            else {

            }
          }
        }
      ]
    });
    confirm.present();


  }
}
