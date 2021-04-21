import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
//La directiva permite manipular aspectos de los elementos a los que son agregados, 
//como el onchange, onmouse, etc.

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  //Creamos el ElementRef para tener los valores del componente que se trabaja
  //y el Renderer2 para hacer renderizaciones personalizadas, como utilizar las clases de
  // sass creadas cuando se desea
  constructor(private el: ElementRef,
    private renderer: Renderer2) { }
    //HostListener funciona como un eventListener, tomando el evento que se pide
    //y ejecutando el cambio, en este caso, se agrega o quita una clase del elemento
    //segun el mouse se pone encima o se quita
    @HostListener('mouseenter') onMouseEnter() {
      this.renderer.addClass(this.el.nativeElement, 'highlight');
    }
  
    @HostListener('mouseleave') onMouseLeave() {
      this.renderer.removeClass(this.el.nativeElement, 'highlight');
    }

}
