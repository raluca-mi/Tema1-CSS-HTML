import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { FilterService } from '../services/filter.service';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

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
    // switch(this.selected)
    // { case "To Do": {this.selected='1';
    //                 break;}
    //   case "Done":  {this.selected='2';
    //                 break;}
    //   case "Done":  {this.selected='3';
    //                 break;}                      
    // };
    this.noteService.addNote(this.title,this.description, this.selected);
  }
}
