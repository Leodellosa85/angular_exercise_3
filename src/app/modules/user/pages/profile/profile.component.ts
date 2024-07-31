import { Component } from '@angular/core';
import { User } from '../../../../shared/shared/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  model = new User(1,'testEmail.com','leo','',true)

  onSubmit(f: NgForm) {
    console.log(this.model);
    console.log(f.value);
    console.log(f.valid);
  }
}
