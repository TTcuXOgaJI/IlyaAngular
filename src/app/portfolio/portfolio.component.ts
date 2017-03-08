import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ip-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})



export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('body').progressTracker({
      linking: true,
      tooltip: "hover",
      negativeTolerance: 0,
      positiveTolerance: 0,
      displayWhenActive: false,
      disableBelow: 1000
    });
  }

  scroll($event) {
    $event.preventDefault();
    let sectionId:any = $event.currentTarget.getAttribute('data-id');
    this.scrollToID("#"+sectionId,750);
  }

 scrollToID(id, speed) {
    var topElementTop = $('#topElement').position().top;
    var topElementOuter = $('#topElement').outerHeight(true);
    var targetOffset = $(id).offset().top - (topElementTop + topElementOuter);
    $('html,body').animate({scrollTop: targetOffset}, 1200);
}

}
