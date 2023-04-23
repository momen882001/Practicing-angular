import { Directive , OnInit , ElementRef , Renderer2, HostListener , HostBinding} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef : ElementRef , private renderer : Renderer2  ) { }

  ngOnInit(): void {
    // this.renderer.setStyle( this.elRef.nativeElement, 'background-color' , 'blue');
  }

  @HostBinding('style.backgroundColor') backgroundColor!: string;
  @HostBinding('style.transition') transition!: string;

  @HostListener('mouseenter') moseOver(event : Event) {
    // this.renderer.setStyle( this.elRef.nativeElement, 'background-color' , 'blue');
    this.backgroundColor = "blue";
    this.transition = "0.5s ease"
  }

  @HostListener('mouseleave') moseLeave(event : Event) {
    // this.renderer.setStyle( this.elRef.nativeElement, 'background-color' , 'transparent');
    this.backgroundColor = "transparent";
    this.transition = "0.5s ease"
  }

}
