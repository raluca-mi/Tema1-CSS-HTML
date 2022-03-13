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
  // specifiedColor: string="orange";

  @Input() selectedCategoryId: string;

  constructor(private noteService: NoteService) { }

  ngOnInit(): void {
    this.noteService.serviceCall();
    this.notes=this.noteService.getNotes();
  }

  ngOnChanges():void{
    //console.log(this.selectedCategoryId);
    this.notes = this.noteService.getFiltredNotes(this.selectedCategoryId);
  }

}
