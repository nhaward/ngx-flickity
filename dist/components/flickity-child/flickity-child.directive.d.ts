import { ElementRef, AfterContentInit } from '@angular/core';
import { FlickityDirective } from '../flickity/flickity.directive';
export declare class FlickityChildDirective implements AfterContentInit {
    private el;
    private parent;
    flickityChild: any;
    constructor(el: ElementRef, parent?: FlickityDirective);
    ngAfterContentInit(): void;
}
