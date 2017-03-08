import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FirebaseObjectObservable, AngularFire } from "angularfire2";

@Component({
  selector: 'ip-bottom-nav',
  templateUrl: './bottom-nav.component.html',
  styleUrls: ['./bottom-nav.component.scss']
})
export class BottomNavComponent implements OnInit, AfterViewInit {
    ngAfterViewInit(): void {
        // $('body');
console.log($('body'));
    //     .progressTracker({
    //   linking: true,
    //   tooltip: "hover",
    //   negativeTolerance: 0,
    //   positiveTolerance: 0,
    //   displayWhenActive: false,
    //   disableBelow: 1000
    // });
    }

  bottomNav: FirebaseObjectObservable<any>;
  constructor(af: AngularFire) {
    this.bottomNav = af.database.object('https://ilya-pisman.firebaseio.com/bottomNavigation');
  }

  ngOnInit() {
 
  }

}
