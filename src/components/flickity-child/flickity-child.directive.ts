import {
  Directive, Optional, Host, ElementRef, AfterContentInit, Input
} from '@angular/core';

import { FlickityDirective } from '../flickity/flickity.directive';

@Directive({ selector: '[flickityChild]' })
export class FlickityChildDirective implements AfterContentInit {

  @Input() flickityChild: any;

  constructor(private el: ElementRef,
              @Optional() @Host() private parent?: FlickityDirective) {}

  ngAfterContentInit(): void {
    if (!this.parent) {
      return;
    }

    this.parent.append(this.el.nativeElement);
  }
}
