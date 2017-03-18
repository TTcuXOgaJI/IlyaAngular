import { Directive, ElementRef, Component, Input, OnInit, ViewChild, Renderer } from '@angular/core';

@Directive({
  selector: '[ip-transform]'
})

export class TransformDirective implements OnInit {
  @Input('ip-transform') options: any;
 
  constructor(private el: ElementRef, private renderer : Renderer ) {
  }

  ngOnInit() {
    let params: any = JSON.parse(this.options);
    let state: any = {};

    state.currentDelta = 0;

    if (params) {
      params.force ? state.force = params.force : state.force = .08;
      params.easeOutFactor ? state.easeOutFactor = params.easeOutFactor : state.easeOutFactor = .04;
    }

    window.requestAnimationFrame(renderAnimationFrame.bind(this));

    function renderAnimationFrame() {
      let scrollTop =  window.scrollY;
      let newDelta = (0 - (scrollTop * state.force));
      let tweenDelta = (state.currentDelta - ((state.currentDelta - newDelta) * state.easeOutFactor));
      state.currentDelta = tweenDelta;
      this.renderer.setElementStyle(this.el.nativeElement,'transform',`translateY(${tweenDelta}px)`);
      window.requestAnimationFrame(renderAnimationFrame.bind(this));
    }
  }
}


