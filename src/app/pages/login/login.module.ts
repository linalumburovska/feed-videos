import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedsService } from 'src/app/services/feeds.service';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ],
  providers: []
})
export class LoginModule { }