import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from '../category';
import { FilterService } from '../services/filter.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss'],
})


export class AddNoteComponent implements OnInit{

  selected: string;
  title: string;
  description: string;
  categories: Category[];

  constructor(private noteService: NoteService,private filterService: FilterService) { }

  ngOnInit(): void {
    this.categories=this.filterService.getFilters();
  }
 
  AddNote()
  {
    this.noteService.addNote(this.title,this.description, this.selected);
  }

}
