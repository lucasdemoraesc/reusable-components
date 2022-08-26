import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  template: `<main class="content-container">
              <router-outlet></router-outlet>
             </main>`,
  styleUrls: ['./container.component.css']
})
export class ContainerComponent {

  constructor() { }
}
