import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IProduct, ProBilgiler } from 'src/models/IProduct';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbaord',
  templateUrl: './dashbaord.component.html',
  styleUrls: ['./dashbaord.component.css'],
})
export class DashbaordComponent implements OnInit {
  products: ProBilgiler[] = [];

  constructor(
    private http: HttpClient, 
    private toast: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.toast.show("Yükleniyor..")
    const url = 'https://www.jsonbulut.com/json/product.php';
    const sendParam = {
      ref: 'c7c2de28d81d3da4a386fc8444d574f2',
      start: 0,
    };
    const newThis = this;
    this.http.get<IProduct>(url, { params: sendParam }).subscribe({
      next(res) {
        newThis.products = res.Products![0].bilgiler!;
        newThis.toast.clear()
      },
      error(err) {
        console.error(err.message);
        newThis.toast.clear()
        newThis.toast.error(err.message)
      },
    });
  }

  fncGotoDetail( num:number ) {
    const item = this.products[num]
    localStorage.setItem('item', JSON.stringify(item) )
    this.router.navigate(['/detail'])
  }

}
