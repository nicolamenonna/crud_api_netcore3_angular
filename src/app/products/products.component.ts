import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService, private modalService: NgbModal) { }

  closeResult: string;

  products: any;
  product: any;

  ngOnInit() {
    /*
    this.productService.getProducts().subscribe(
      resp => this.products = resp
    ) */
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  add(name: string, price: number, quantity: number, description: string) {
    name = name.trim();
    description = description.trim();
    if (!name && !price && !quantity && !description) { return; }
    this.productService.addProduct({ name, price, quantity, description } as Product)
      .subscribe( resp => {
        this.product.push(resp);
      });
  }

}
