import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColorText]'
})
export class ColorTextDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string="blue";


  @Input('appColorText')
  textColor!: string;

  @HostListener('mouseenter') onMouseEnter(){
  this.colorText(this.textColor||this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.colorText(this.defaultColor);
    }

  private colorText(color: string) {
  this.el.nativeElement.style.color = color;
  }
}
