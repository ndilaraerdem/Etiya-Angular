import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  // error message control
  error = ''
  user = {
    name: '',
    email: ''
  }

  constructor( private formBuilder:FormBuilder ) {}

  ngOnInit(): void {
    
    this.userForm = new FormGroup({
      name: new FormControl( this.user.name, [
        Validators.required,
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ])
    })

  }

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email')
  }

  // formGroup
  userForm = this.formBuilder.group({
    name: '',
    email: ''
  })

  fncSend() {
    const name = this.userForm.value.name
    const email = this.userForm.value.email
    if ( name === '' || email === '' ) {
      this.error = 'Lütfen tüm alanları doldurunuz!'
      setTimeout(() => {
        this.error = ''
      }, 4000);
    }else {
      this.error = ''
      console.log( name, email )
    }
  }

}
