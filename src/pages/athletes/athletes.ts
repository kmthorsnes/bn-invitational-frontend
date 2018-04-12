import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AthletePage } from '../athlete/athlete';
import { AthletesProvider } from '../../providers/athletes/athletes';

@IonicPage()
@Component({
  selector: 'page-athletes',
  templateUrl: 'athletes.html',
})
export class AthletesPage {

  athletes: any[];

  constructor(private athletesProvider: AthletesProvider, private navCtrl: NavController) {
    this.athletesProvider
        .all()
        .subscribe(athletes => {
                this.athletes = athletes.data;
             });
  }

  doRefresh(refresher) {
    this.athletesProvider
      .all()
      .subscribe(athletes => {
        this.athletes = athletes.data;
     });

    setTimeout(() => {
      refresher.complete();
    }, 2000);
  }

    launchAthletePage(id) {
      this.navCtrl.push(AthletePage, { athlete_id: id });
  }

  ionViewDidLeave() {
<<<<<<< HEAD
=======
    console.log('Hes leaving');
>>>>>>> 3e2d70adebddbc6a982fd78d0b35954185ad9179
    this.athletesProvider
      .all()
      .subscribe(athletes => {
        this.athletes = athletes.data;
     });
  }

}
