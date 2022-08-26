import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableButtonsComponent } from './content/available-buttons/available-buttons.component';
import { UnderConstructionComponent } from './content/under-construction/under-construction.component';

const routes: Routes = [
  { path: "", redirectTo: "/buttons", pathMatch: 'full' },
  { path: "buttons", component: AvailableButtonsComponent },
  { path: "inputs", component: UnderConstructionComponent },
  { path: "colors", component: UnderConstructionComponent },
  { path: "typography", component: UnderConstructionComponent },
  { path: "spaces", component: UnderConstructionComponent },
  { path: "grid", component: UnderConstructionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
