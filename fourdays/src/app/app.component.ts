import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ibanValid, userAmount, userValid } from 'src/bank';
import { IUser } from 'src/models/IUser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private router: Router ) {  }
  
  user: IUser = {
    name: 'Ali',
    surname: 'Bilirim',
    email: 'ali@mail.com',
    password: '12345',
    age: 33,
    math: Math,
    address: {
      title: 'İstanbul',
      detail: 'Beşiktaş',
      code: 344455 
    }
  }

  userx: IUser = {
    name: 'Erkan',
    email: 'erkan@mail.com',
    password: '1234',
    math: Math
  }

  userArr: IUser[] = []

  ngOnInit(): void {
    this.user.email = 'mehmet@mail.com'
    console.log( this.user.email )
    console.log( this.userx.email )
    if ( this.userx.surname ) {
      const sur = this.userx.surname
    }
    console.log( this.userx.surname?.length )
    this.userAdd(this.user)

    console.log( this.user.address?.title )

    // promise func call
    this.funcCall()
    

    /*
    userValid().then( uItem => {
        userAmount().then( aItem => {
          ibanValid().then( iItem => {
            console.log("All Func Call")
          })
        })
    })
    */

  }

  fncSessionCreate() {
    const us:IUser = {
      name: 'Ali Bilme',
      email: 'ali@mail.com',
      password: '12345',
      math: Math
    } 
    sessionStorage.setItem('user', JSON.stringify(us) );
    this.router.navigate(['/dashboard'])
  }

  async funcCall() {
    await userValid()
    await userAmount()
    await ibanValid()
    console.log("====================")
  }


  userAdd( item: IUser ) {
    console.log( item )
  }

  


}
