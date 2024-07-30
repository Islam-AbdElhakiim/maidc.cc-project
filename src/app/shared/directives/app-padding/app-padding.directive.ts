import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPadding]',
  standalone: true
})
export class AppInlinePaddingDirective implements OnInit {
  @Input() paddingY: number = 2;
  @Input() paddingX: number = 2;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.addPadding()
  }

  addPadding = () => this.renderer.setStyle(this.el.nativeElement, 'padding', `${this.paddingY}rem ${this.paddingX}rem`)

}
