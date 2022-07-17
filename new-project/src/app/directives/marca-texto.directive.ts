import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit{
  @Input() corDeFundo: string = "yellow";
  @Input() corDeTexto: string = "white";

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    this.mudarFundo();
    
  }

  mudarFundo(cor:string ='yellow'){
    this.elemento.nativeElement.style.backgroundColor = this.corDeFundo || cor;
    this.elemento.nativeElement.style.color = this.corDeTexto;
    this.elemento.nativeElement.style.fontWeight = 'bold';
  }

}
