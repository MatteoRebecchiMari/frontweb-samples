import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  // using private el its like a syntax sugar used in Dart like this.el
  // The element is passed by injection
  constructor(private el: ElementRef) {
    this.highlight('yellow');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    // We can set the native property style for the elemenet
    this.el.nativeElement.style.backgroundColor = color;
  }

}
