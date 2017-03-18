import { Component, OnInit, Input, AfterViewInit, trigger, state, style, transition, animate, } from '@angular/core';
import { FirebaseObjectObservable } from "angularfire2";

@Component({
  selector: 'ip-project-section',
  templateUrl: './project-section.component.html',
  styleUrls: ['./project-section.component.scss'],
})
export class ProjectSectionComponent implements OnInit, AfterViewInit {

  @Input() slideData: FirebaseObjectObservable<any>;
  @Input() slideNumber: number;
   @Input() ready: boolean;
  @Input() isLeft: boolean;
  @Input() isRight: boolean;
  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {
    (<any>$('.carousel')).carousel({
      interval: false
    })
  }

  showModal(event) {
    let modalId: string = event.currentTarget.getAttribute('data-target');
    let modal = document.getElementById(modalId);
    (<any>$(modal)).modal('show');
  }

  slideCarousel(event) {
    let slideIndex: string = event.currentTarget.getAttribute('data-slide-to');
    let slider: string = event.currentTarget.getAttribute('data-carouselTarget');
    (<any>$(document.getElementById(slider))).carousel(parseInt(slideIndex));
  }

  carouselPrev(event) {
    let slider: string = event.currentTarget.getAttribute('data-carouselTarget');
    (<any>$(slider)).carousel('prev');
  }

  carouselNext(event) {
    let slider: string = event.currentTarget.getAttribute('data-carouselTarget');
    (<any>$(slider)).carousel('next');
  }

}
