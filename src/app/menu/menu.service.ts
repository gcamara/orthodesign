import { Injectable } from '@angular/core';
import { MenuItem } from '../model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  _menus: MenuItem[] = [
    { title: 'Sobre', section: 'sobre' },
    { title: 'Serviços', section: 'servicos' },
    { title: 'Nossa Equipe', section: 'equipe' },
    { title: 'Localização', section: 'localizacao' },
  ];

  defaultMessage = 'Ol%C3%A1%2C%20gostaria%20de%20marcar%20uma%20consulta';
  _urlConsulta = `https://api.whatsapp.com/send?phone=5585981950931&text=`;

  constructor() { }

  getUrlWithMessage(message: string) {
    return `${this._urlConsulta}${message}`;
  }

  get menus(): MenuItem[] {
    return this._menus;
  }

  get urlConsulta(): string {
    return `${this._urlConsulta}${this.defaultMessage}`;
  }
}
