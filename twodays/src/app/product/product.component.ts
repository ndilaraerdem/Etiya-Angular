import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor( private route:ActivatedRoute ) { }

  getid = ''

  ngOnInit(): void {
    this.route.paramMap.subscribe( params => {
        const id = params.get('id')
        if ( id ) {
          this.getid = id;
        }
        this.getid = id!
    })
  }

}
