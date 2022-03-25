import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // değişken kurulu
  // const -> sabit -> sınıfa ait olduğunda tanımlanamaz, method gövdesinde kullanılır.
  // let -> normal değişken ama fonksiyon içinde yazıldığıda globalde kullanım
  // var -> normal değişişken 
  header_title = '';
  // header_title = ''; // değişken değeri sınıf gövdesinde değişime tabi tutalamaz.


  constructor() { 
    this.header_title = 'App Title';
    const name = 'Ali';
    console.log("Call -1")
  }

  ngOnInit(): void {
    let name = '';
    name = 'Serkan';
    var surname = '';
    surname = 'Bilmem';
    console.log("Call -2")
    this.call()
  }

  call() {
    console.log( "Call call" )
  }

}
