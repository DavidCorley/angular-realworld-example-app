import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CompeatPageComponent } from './compeat-page.component';
import { CompeatRoutingModule } from './compeat-page-routing.module';
import { CommonModule } from '@angular/common';
import { CompeatModule } from '../shared';

@NgModule({
  imports: [
    CompeatRoutingModule,    
    CommonModule,
    CompeatModule    
  ],
  declarations: [CompeatPageComponent]
})
export class CompeatPageModule { }
