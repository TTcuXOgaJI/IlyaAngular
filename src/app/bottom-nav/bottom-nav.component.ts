import { Component, OnInit } from '@angular/core';
import { FirebaseObjectObservable, AngularFire } from "angularfire2";

@Component({
  selector: 'ip-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit {

  bottomNav: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    this.bottomNav = af.database.object('https://ilya-pisman.firebaseio.com/bottomNavigation');
  }

  ngOnInit() {
 
  }

}
