import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  ProductId=0;
  photoId=0;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params)=>{
    
      const myValue=params;
    
      this.ProductId=myValue['productId'];
      this.photoId=myValue['photoId'];
    
    })
   }

  ngOnInit(): void {

  }

}
