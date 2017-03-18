import { Component, OnInit, Input } from '@angular/core';
import { FirebaseObjectObservable } from "angularfire2";

@Component({
  selector: 'ip-gallery-grid',
  templateUrl: './gallery-grid.component.html',
  styleUrls: ['./gallery-grid.component.scss']
})
export class GalleryGridComponent implements OnInit {
  
  @Input() gridData:FirebaseObjectObservable<any>;

  constructor() { }

  ngOnInit() {

  }

  scroll($event) {
    $event.preventDefault();
    let sectionId: any = $event.currentTarget.getAttribute('data-id');
    this.scrollToID("#" + sectionId, 750);
  }

  scrollToID(id, speed) {
    var topElementTop = $('#topElement').position().top;
    var topElementOuter = $('#topElement').outerHeight(true);
    if ($(id).get(0)) {
      var targetOffset = $(id).offset().top - (topElementTop + topElementOuter);
      $('html,body').animate({ scrollTop: targetOffset }, 1200);
    }
  }
}
