import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  this.noteService.getNotes().subscribe((notes: Note[])=>{this.notes=notes;});
}

ngOnChanges(): void {
  if(this.selectedCategoryId)
  this.noteService.getFilterNotes(this.selectedCategoryId).subscribe((notes:Note[])=>this.notes=notes)

  if(this.inputSearch)
  this.noteService.getSearchedNotes(this.inputSearch).subscribe((notes:Note[])=>this.notes=notes)

  if(this.inputSearch && this.selectedCategoryId)
  this.noteService.getFilterSearchedNotes(this.selectedCategoryId, this.inputSearch).subscribe((notes:Note[])=>this.notes=notes)
}

// DeleteNote(noteId: string)
// {
//   this.noteService.deleteNote(noteId).subscribe((notes:Note[])=>this.notes=notes)
// }

  //code before http

  // ngOnInit(): void {
  //   this.noteService.serviceCall();
  //   this.notes=this.noteService.getNotes();
  // }

  // ngOnChanges():void{

  //   if(this.selectedCategoryId)
  //   this.notes = this.noteService.getFiltredNotes(this.selectedCategoryId);     
    
  //   if(this.inputSearch)
  //   this.notes = this.noteService.getSearchedTitle(this.inputSearch);

  //   if(this.selectedCategoryId && this.inputSearch)
  // {
  //   this.notes = this.noteService.getFiltredByCategTitle(this.selectedCategoryId,this.inputSearch);
  // }
  // }
  

}
