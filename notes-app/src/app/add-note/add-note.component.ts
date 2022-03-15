import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Category } from '../category';
import { Note } from '../note';
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
    const note: Note = {
      title: this.title,
 	    description: this.description,
      categoryId: this.selected,
      color: "#ccccff"
    };

    this.noteService.addNote(note).subscribe();
    
    //code before http
    //this.noteService.addNote(this.title,this.description, this.selected);
  }

}
