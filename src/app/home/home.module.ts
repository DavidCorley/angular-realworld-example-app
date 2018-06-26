import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeAuthResolver } from './home-auth-resolver.service';
import { SharedModule, CompeatModule } from '../shared';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HomeRoutingModule,
    CompeatModule
  ],
  declarations: [
    HomeComponent    
  ],
  providers: [
    HomeAuthResolver 
  ]
})
export class HomeModule {}
