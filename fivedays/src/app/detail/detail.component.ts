import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProBilgiler } from 'src/models/IProduct';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  item:ProBilgiler = {}

  constructor( private router:Router ) { 
    const stItem = localStorage.getItem('item')
    if ( stItem ) {
      try {
        // hata olma olasılığı olan kodlar yazılır.
        this.item = JSON.parse(stItem);
      } catch (error) {
        // try gövdesinde hata olduğunda çalışacak gövde bu bölümdedir.
        localStorage.removeItem('item')
        this.router.navigate(['/dashboard'])
      }
    }else {
      this.router.navigate(['/dashboard'])
    }
  }

  ngOnInit(): void {
  }

}
