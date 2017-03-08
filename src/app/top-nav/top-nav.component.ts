import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'ip-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  navigationTab: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    this.navigationTab = af.database.object('https://ilya-pisman.firebaseio.com/topNavigation');
   }

  ngOnInit() {
  }

}
