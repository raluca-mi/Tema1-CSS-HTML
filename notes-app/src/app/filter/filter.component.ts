import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../category';
import { FilterService } from '../services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  categories: Category[];

@Output() emitSelectedFilter= new EventEmitter<string>();

  constructor(private filterService: FilterService) { }

  selectFilter(categoryId: string) {
    this.emitSelectedFilter.emit(categoryId);
  }
  
  ngOnInit(): void {
    this.categories=this.filterService.getFilters();
  }

}
