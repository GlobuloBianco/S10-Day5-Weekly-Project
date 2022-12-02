import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})
export class EvidenziaDirective implements OnInit {
    constructor(private renderer: Renderer2, private el: ElementRef) { }

    ngOnInit() {
        this.renderer.addClass(this.el.nativeElement, 'highlight');
    }
}

//  CHE SIA DA LEZIONE! COSI IMPARO A STARE SU PIPE PER ORE
//  RICORDA!!! Directive = CSS, Pipe = InnerHTML!!!!! >:CC
