import { Component } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { MenuItem } from '../model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  menus: MenuItem[];
  urlConsulta = this.menuService.urlConsulta;

  constructor(private menuService: MenuService) {
    this.menus = menuService.menus;
  }
  
  scrollOrNavigate(menu: MenuItem, event: Event): void {
    event.preventDefault();
    if (menu.section) {
      const el = document.getElementById(menu.section);
      el?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
    }
  }

}
