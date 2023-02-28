import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { DetailsPage } from '../details/details.page';

interface users {
  limit: any
  skip: any
  total: any
  users: any
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userList: any = []
  constructor(
    private http: HttpClient,
    private modal: ModalController,


  ) {
    this.http.get("https://dummyjson.com/users").subscribe((res) => {
      let obj: users = JSON.parse(JSON.stringify(res))
      console.log(obj.users);
      this.userList = obj.users
    })
  }

  async onClickDetails(item: any) {
    const modal = await this.modal.create({
      component: DetailsPage,
      cssClass: "my-custom-class",
      componentProps: {
        information: item
      },
    });
    return await modal.present();
  }

}
