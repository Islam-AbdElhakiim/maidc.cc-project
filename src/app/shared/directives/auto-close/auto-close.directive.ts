import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appAutoClose]',
  standalone: true

})
export class AutoCloseDirective {
  @Input() dropdown!: any;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:click', ["$event.target"])
  handleClick = (target: any) => {
    if (this.isClickingOutside(target)) {

      this.closeDropdown()
    } else {

      this.openDropdown()
    }

  }

  isClickingOutside = (target: ElementRef): boolean => {
    return !this.el.nativeElement.contains(target) && !this.dropdown.contains(target)

  }

  closeDropdown = () => {
    this.renderer.setStyle(this.dropdown, 'display', 'none')
  }

  openDropdown = () => {
    this.renderer.setStyle(this.dropdown, 'display', 'flex')
  }

}
