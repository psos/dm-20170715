import { Component } from '@angular/core';

// interfejs Produktu
interface Product {
  id: number;
  name : string;
  price : number;
  currency: string;
  promoted : boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  // store lista produktów
  public products:Product[] = [
    { 
        id : 1,
        name : 'Kawa',
        price : 5.99,
        currency : 'PLN',
        promoted : true
    },
    { 
        id : 2,
        name : 'Hot dog',
        price : 3.99,
        currency : 'PLN',
        promoted : false,
    },
    { 
        id : 3,
        name : 'Piwo żywiec',
        price : 2.99,
        currency : 'PLN',
        promoted : false,
    },      
  ];
}
