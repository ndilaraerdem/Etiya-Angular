import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bilgiler, User } from 'src/models/IUserLogin';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: Bilgiler = {
    userId: '',
    userName: '',
    userSurname: '',
    userEmail: '',
    userPhone: '',
    face: '',
    faceID: ''
  }

  constructor( private router:Router ) {
    const stUser = sessionStorage.getItem('user')
    if ( stUser ) {
      const itemUser:User = JSON.parse(stUser)
      this.user = itemUser.bilgiler!
    }else {
      this.router.navigate(['/'])
    }
  }

  ngOnInit(): void {
  }

}
