import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  inputSearch: string;

  @Output() emitSearch= new EventEmitter<string>();
  
  constructor() { }

  selectSearch() {
    this.emitSearch.emit(this.inputSearch);
  }

  ngOnInit(): void {
    
  }

}
