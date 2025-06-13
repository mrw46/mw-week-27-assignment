import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() set appHighlight(active: boolean) {
    if (active) {
      this.el.nativeElement.style.backgroundColor = 'gold';
    }
  }

  constructor(private el: ElementRef) {}
}
