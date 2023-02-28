import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  user: any
  constructor(private modalCtrl: ModalController, public navParams: NavParams) {
    this.user = ''
    this.user = this.navParams.get("information");
    console.log(this.user);

  }

  ngOnInit() {
  }


  back() {
    console.log("back");
    this.modalCtrl.dismiss()
  }
}
