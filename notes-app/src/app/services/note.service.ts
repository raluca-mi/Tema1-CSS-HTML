import { Injectable } from '@angular/core';
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {


  notes: Note[] = [
    {
      id: "Id1",
      title: "First note",
      description: "This is the description for the first note",
      categoryId: "1",
      color: "#cc99ff"
    },
    {
      id: "Id2",
      title: "Second note",
      description: "This is the description for the second note",
      categoryId: "2",
      color:"#ff99cc"
    },
    {
      id: "Id3",
      title: "Third note",
      description: "This is the description for the third note",
      categoryId: "3",
      color:"#ff9966"
    }
  ];

  constructor() { }

  serviceCall() {
    console.log("Note service was called");
    
  }

  getNotes() {
    return this.notes;
  }

  getFiltredNotes(categoryId: string)
  {
    // return this.notes.filter((nota)=>{
    //   nota.categoryId === categoryId
    // });
    return this.notes.filter(nota => nota.categoryId===categoryId)
  }
  
  addNote(title: string, description: string, filter:string)
  { 
    let newNote:Note = {
      id: "Id"+(this.notes.length+1),
      title: title,
      description: description,
      categoryId: filter,
      color: "#cc99ff"
    };

    this.notes.push(newNote);
    console.log(newNote);
  }
  
}
