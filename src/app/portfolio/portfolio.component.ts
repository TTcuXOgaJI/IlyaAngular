import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { FirebaseObjectObservable } from "angularfire2";
import { FirebaseService } from "app/firebase-service/firebase.service";
import { Router, NavigationEnd } from "@angular/router";

@Component({
  selector: 'ip-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})



export class PortfolioComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    this.portfolioData.subscribe(
      data => {
        let $this = this;
        setTimeout(function () { $this.initTracker() });
      }
    );
  }

  initTracker() {
    $('body').progressTracker({
      linking: true,
      tooltip: "hover",
      negativeTolerance: 0,
      positiveTolerance: 0,
      displayWhenActive: false,
      disableBelow: 1000
    });
  }

  portfolioData: FirebaseObjectObservable<any>;

  constructor(private firebaseService: FirebaseService, private router: Router) {
    this.portfolioData = firebaseService.getDataByUrl('https://ilya-pisman.firebaseio.com/projects');
    router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        $('.progress-tracker').remove();
      }
    });
  }

  ngOnInit() {

  }





}
