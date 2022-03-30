import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/models/IUser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user:IUser = {
    name: '',
    email: '',
    password: '',
    math: Math
  }
  constructor( private router: Router ) { 
    const usString = sessionStorage.getItem('user')
    if ( usString ) {
      // kullanıcı var
      this.user = JSON.parse(usString)
    }else {
      // kullanıcı yok
      this.router.navigate([''])
    }
  }

  ngOnInit(): void {
  }

}
