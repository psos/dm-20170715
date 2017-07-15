import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  public searchInput = new FormControl();
  @Output() public changeSearch = new EventEmitter();

  ngOnInit() {
  }

  constructor() {
    this.searchInput.valueChanges
      .debounceTime(400)
      .subscribe((e) => {
          this.changeSearch.next(e);
        }  
    );
  }

}
