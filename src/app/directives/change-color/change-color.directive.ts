import {Directive, ElementRef, HostListener, Renderer2} from '@angular/core';

@Directive({
  selector: '[changeColor]'
})
export class ChangeColorDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter')
  onMouseEnter(){
    this.changeColor('red');
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.changeColor('white');
  }

  private changeColor(color: string){
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

}
