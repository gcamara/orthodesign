import { AfterViewInit, Component, ElementRef, HostBinding, ViewChild } from '@angular/core';
import { MenuItem } from '../model';
import { gsap } from 'gsap';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {

  @HostBinding('class') classes = 'd-flex align-center';

  @ViewChild('items') items!: ElementRef<HTMLDivElement>;

  lastNum = -20;

  menus: MenuItem[] = [
    { title: 'Início', section: '#' },
    { title: 'Serviços', section: '#servicos' },
    { title: 'Sobre', section: '#sobre' },
    { title: 'Localização', section: '#localizacao' },
  ];

  constructor() { }

  ngAfterViewInit(): void {
    gsap.from(this.items.nativeElement.children, { 
      opacity: 0,
      duration: .55,
      y: () => {
        this.lastNum *= -1;
        return this.lastNum;
      },
      stagger: .5,
      ease: 'ease.inout'
    })
  }

}
