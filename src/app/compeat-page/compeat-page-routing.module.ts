import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompeatPageComponent } from './compeat-page.component';

const routes: Routes = [
  {
    path: '',
    component: CompeatPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompeatRoutingModule { }
