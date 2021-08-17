import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, ViewChild } from '@angular/core';
import { MenuItem } from '../model';
import { gsap } from 'gsap';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MenuService } from './menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements AfterViewInit {

  @HostBinding('class.sm') classesSm = this.breakpointObserver.isMatched('(max-width: 1023px)');
  @HostBinding('class.bg') classesBg = this.breakpointObserver.isMatched('(min-width: 1024px)');
  @HostBinding('class.scrolled') classesScrolled = false;

  showMenu = false;

  @ViewChild('items') items!: ElementRef<HTMLDivElement>;

  lastNum = -20;

  urlConsulta = this.menuService.urlConsulta;

  menus: MenuItem[] = this.menuService.menus;

  constructor(private breakpointObserver: BreakpointObserver,
    private menuService: MenuService) { }

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

  @HostListener('window:scroll')
  onScroll(): void {
    this.classesScrolled = window.scrollY > 50;
  }

  scrollOrNavigate(menu: MenuItem, event: Event): void {
    event.preventDefault();
    this.showMenu = false;
    if (menu.section) {
      const el = document.getElementById(menu.section);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
    }
  }

  agendarConsulta(): void {
    
  }

}
