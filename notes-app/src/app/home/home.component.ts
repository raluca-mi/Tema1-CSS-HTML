import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  categoryId: string;
  inputSearch: string;

  constructor() { }

  receiveCategory(categId: string) {
    this.categoryId = categId;
  }

  recieveSearch(inputSearch: string) {
    this.inputSearch = inputSearch;
  }

  ngOnInit(): void {
  }

}
