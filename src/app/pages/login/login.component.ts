import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailField = new FormControl('',[Validators.required,Validators.email]);
  nameField = new FormControl('', Validators.required);

  /* ngOnInit(){
    this.nameField.valueChanges.
    subscribe(value=>{
      this.nameField=value
    })
  } */

  get fieldValid(){
    return this.emailField.touched && this.emailField.hasError('required');
  }

  send(){
    this.nameField.value;
  }
}
