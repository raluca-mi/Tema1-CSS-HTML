import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit, OnChanges {

  notes: Note[];

  @Input() selectedCategoryId: string;
  @Input() inputSearch: string;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.serviceCall();
    this.notes=this.noteService.getNotes();
  }

  ngOnChanges():void{

    if(this.selectedCategoryId)
    this.notes = this.noteService.getFiltredNotes(this.selectedCategoryId);     
    
    if(this.inputSearch)
    this.notes = this.noteService.getSearchedTitle(this.inputSearch);

    if(this.selectedCategoryId && this.inputSearch)
  {
    this.notes = this.noteService.getFiltredByCategTitle(this.selectedCategoryId,this.inputSearch);
  }
  }
  

}
