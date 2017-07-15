import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

// interfejs Produktu
export interface Product {
  id: number;
  name : string;
  price : number;
  currency: string;
  promoted : boolean;
  tags : string[];
}
export interface Tag {
  name : string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Orlen';
  public searchInput = new FormControl();
  // store lista produktów
  public products:Product[] = [
    { 
        id : 1,
        name : 'Kawa',
        price : 5.99,
        currency : 'PLN',
        promoted : true,
        tags: ['test']
    },
    { 
        id : 2,
        name : 'Hot dog',
        price : 3.99,
        currency : 'PLN',
        promoted : false,
        tags: []
    },
    { 
        id : 3,
        name : 'Piwo żywiec',
        price : 2.99,
        currency : 'PLN',
        promoted : false,
        tags: []
    },      
  ];

  public changeSearch(event){
    console.log('test app');
  }
}
