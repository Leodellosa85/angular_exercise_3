import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared/shared.module';




@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,ProfileRoutingModule,FormsModule,SharedModule
  ]
})
export class UserModule { }
