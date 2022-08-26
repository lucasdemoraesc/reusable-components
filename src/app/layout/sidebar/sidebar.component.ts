import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  menuItens: { title: string, route: string; }[];

  constructor() {
    this.menuItens = [
      { title: "Colors", route: "/colors" },
      { title: "Typography", route: "/typography" },
      { title: "Spaces", route: "/spaces" },
      { title: "Buttons", route: "/buttons" },
      { title: "Inputs", route: "/inputs" },
      { title: "Grid", route: "/grid" }
    ];
  }
}
