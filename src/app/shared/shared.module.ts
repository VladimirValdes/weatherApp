import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { RouterModule } from '@angular/router';
import { AsideComponent } from './aside/aside.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    HeaderComponent,
    AsideComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    AsideComponent,
    HeaderComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
