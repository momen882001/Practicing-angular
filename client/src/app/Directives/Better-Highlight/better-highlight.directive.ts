import { Directive , OnInit , ElementRef , Renderer2, HostListener} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef : ElementRef , private renderer : Renderer2  ) { }

  ngOnInit(): void {
    // this.renderer.setStyle( this.elRef.nativeElement, 'background-color' , 'blue');
  }

  @HostListener('mouseenter') moseOver(event : Event) {
    this.renderer.setStyle( this.elRef.nativeElement, 'background-color' , 'blue');
  }

  @HostListener('mouseleave') moseLeave(event : Event) {
    this.renderer.setStyle( this.elRef.nativeElement, 'background-color' , 'transparent');
  }

}
