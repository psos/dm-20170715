import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input() public products;
  @Input() public filter;
  public productsList;
  public filterBy:string;
  public orderBy:string;

  constructor() { 
    
  }
  public ngOnInit() {
    this.productsList = this.products;
  }

  public changeSearch(searchstring:string) {
      this.productsList = this.products.filter((val) => {
          // mechanizm wyszukiwania 
          return val.name.search(searchstring) != -1;
      });
  }
}
