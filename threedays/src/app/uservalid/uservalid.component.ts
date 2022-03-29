import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { userData } from 'src/models/userModels';
import { validateEmail } from 'src/util';

@Component({
  selector: 'app-uservalid',
  templateUrl: './uservalid.component.html',
  styleUrls: ['./uservalid.component.css']
})
export class UservalidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('email') emailRef: ElementRef | undefined; 
  ngAfterViewInit() {
    console.log( this.emailRef )
    this.emailRef?.nativeElement.focus()
  }
  

  emailError = ''
  fncUserValid( evt: KeyboardEvent ): void {
    const data = (<HTMLInputElement> evt.target).value
    this.fncControl(data)
  }

  fncControl( data:string ) {
    const status = validateEmail(data)
    if ( status ) {

      this.emailError = ''
      userData.forEach( item => {
        if ( data === item.email ) {
            this.emailError = 'Bu E-Mail daha önce kullanılmış!, ' + item.first_name + ' ' + item.last_name
        }
      });

    }else {
      this.emailError = 'Lütfen E-Mail formatında giriniz!'
    }

  }

}
