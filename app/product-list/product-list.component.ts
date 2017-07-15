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
  public sortBy:string;
  public sortDir:boolean;

  constructor() { 
    
  }
  public ngOnInit() {
    this.productsList = this.products;
    this.sortDir = false;
  }

  public changeOrder(sortBy:string) {
    // Reverse
    if(this.sortBy == sortBy)
      this.sortDir = !this.sortDir;

    this.sortBy = sortBy;
    
    console.log(this.sortDir);
    this.productsList = this.productsList.sort(
        (a,b) => { 
        return this.sortDir ? a.price > b.price : a.price < b.price;
    });
  }
  public changeSearch(searchstring:string) {
      searchstring = searchstring.toLowerCase();
      this.productsList = this.products.filter((val) => {
          let in_tags = false;
          for(let i in val.tags){
              if(val.tags[i] == searchstring) 
                  true;
          }
          // mechanizm wyszukiwania 
          return val.name.toLowerCase().search(searchstring) != -1 || val.price == searchstring;
      });
  }
}
