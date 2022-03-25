import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Home';

  // array
  // angularda diziler mutable(daha sonradan değiştirilebilir) türdedir
  users = ['İstanbul', 'Ankara', 'İzmir', 'Bursa'];

  // object - class
  obj = {
    title: 'Angular',
    age: 30,
    status: true
  }

  constructor() {
    this.users.push('Adana');
    this.users.push('Antep');
  }

  ngOnInit(): void {
    let index = 0;
    let selectIndex = 0;
    this.users.forEach( item => {
      if ( item == 'İstanbul' ) {
        selectIndex = index;
      }
      index++;
    })
    const indexOf = this.users.indexOf('İstanbul');
    this.users.splice( indexOf, 1 );
  }




}
