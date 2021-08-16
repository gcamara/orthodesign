import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostBinding, HostListener, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from '../model';
import { gsap } from 'gsap';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {

  @HostBinding('class.sm') classesSm = this.breakpointObserver.isMatched('(max-width: 1023px)');
  @HostBinding('class.bg') classesBg = this.breakpointObserver.isMatched('(min-width: 1024px)');

  showMenu = false;

  @ViewChild('items') items!: ElementRef<HTMLDivElement>;

  lastNum = -20;

  menus: MenuItem[] = [
    { title: 'Sobre', section: '#sobre' },
    { title: 'Serviços', section: '#servicos' },
    { title: 'Nossa Equipe', section: '#equipe' },
    { title: 'Localização', section: '#localizacao' },
  ];

  constructor(private breakpointObserver: BreakpointObserver, private cdr: ChangeDetectorRef) { }

  ngAfterViewInit(): void {
    this.breakpointObserver.observe('(min-width: 1024px)')
      .subscribe((data: any) => {
        if (data.matches) {
          gsap.from(this.items.nativeElement.children, {
            opacity: 0,
            duration: .55,
            y: () => {
              this.lastNum *= -1;
              return this.lastNum;
            },
            stagger: .5,
            ease: 'ease.inout'
          });
        }
      });
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.classesSm = this.breakpointObserver.isMatched('(max-width: 1023px)');
    this.classesBg = this.breakpointObserver.isMatched('(min-width: 1024px)');
  }

}
