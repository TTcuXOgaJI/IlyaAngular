import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { FirebaseService } from "app/firebase-service/firebase.service";

@Component({
  selector: 'ip-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  navigationTab: FirebaseObjectObservable<any>;
  constructor(private firebaseService :FirebaseService) {
   this.navigationTab =  firebaseService.getDataByUrl('https://ilya-pisman.firebaseio.com/topNavigation');
   }

  ngOnInit() {
  }

}
