import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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

  id: string;
  selected: string;
  title: string;
  description: string;
  addMode: boolean;

  categories: Category[];

  constructor(private noteService: NoteService,private filterService: FilterService,
    private _router: Router,private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.params['id'];
      this.addMode = !this.id;
      let toEditNote: Note;
      if(!this.addMode)
      {this._activatedRoute.params.subscribe(parameter => 
        {
          this.noteService.getNote(parameter['id']).subscribe(((notes:Note[])=>toEditNote=notes[0]))

          toEditNote.id= parameter['id'];
          this.title=toEditNote.title;
          this.description=toEditNote.description;
          this.selected=toEditNote.categoryId;
        }
       
      );}
      
    this.categories=this.filterService.getFilters();
  }

  EditNote(noteId)
  {
    let note: Note = { 
      id: noteId,
      title: this.title,
      description: this.description,
      categoryId: this.selected,
      color:"#ccccff"
     
    }

    this.noteService.editNote(noteId,note).subscribe();
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
