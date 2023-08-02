import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.interceptor';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: []
})
export class CoreModule { }
