import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SideBarComponent {

  @ViewChild('sidebarRef') public sidebarRef!: Sidebar;

  public sidebarItems = [
    { label: 'Listado', icon: 'pi pi-list mr-2', url: './list' },
    { label: 'Nuevo', icon: 'pi pi-plus mr-2', url: './new-user' },
  ]

  public sidebarVisible: boolean = false;

  closeCallback(e: Event): void {
    this.sidebarRef.close(e);
  }

}
