import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  title = ''
  price = ''
  products:any[] = []

  constructor() { 
      this.fncAllDataLocal()
  }

  ngOnInit(): void {
  }

  // insert
  fncInsert() {
    const pr = {
      title: this.title,
      price: this.price
    }
    const stItem = JSON.stringify(pr)
    this.fncAddLocal(stItem)
    this.fncAllDataLocal()
  }

  fncAddLocal( item: string ) {
    const local = localStorage.getItem("products")
    if ( local ) {
        // data daha önceden var
        const arr = JSON.parse(local);
        arr.push( JSON.parse(item) )
        localStorage.setItem("products", JSON.stringify(arr) )
    }else {
        // data yok, yeni ekleme
        localStorage.setItem("products", '['+item+']' )
    }
  } 

  // data result
  fncAllDataLocal() {
    const st = localStorage.getItem('products')
    if ( st ) {
      this.products = JSON.parse(st);
    }
  }

  // data remove
  fncDataRemove( index:number ) {
      // dizi eleman silme
      const alert = confirm('Silmek istediğinizden emin misiniz?')
      if ( alert == true ) {
        this.products.splice(index, 1)
        localStorage.setItem('products', JSON.stringify(this.products) )
      }
  }


  // data update - select
  index = -1
  fncDataUpdate( index:number ) {
    this.index = index
    const item = this.products[index]
    this.title = item['title']
    this.price = item['price']
  }

  fncUpdate() {
    const item = {
      title: this.title,
      price: this.price
    }
    this.products[this.index] = item
    localStorage.setItem('products', JSON.stringify(this.products) )
    this.fncAllDataLocal()
    this.index = - 1
    this.title = ''
    this.price = ''
  }


}
