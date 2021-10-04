import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public activateMenu = false;

  constructor() { }

  
  showMenu() {
    this.activateMenu = !this.activateMenu;
  }
}
