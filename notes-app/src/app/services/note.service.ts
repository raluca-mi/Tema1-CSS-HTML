import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Note } from '../note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  readonly baseUrl= "https://localhost:4200";
  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  serviceCall() {
    console.log("Note service was called");
  }

  getNotes():Observable<Note[]>
  {
    return this.httpClient.get<Note[]>(this.baseUrl+'/notes', this.httpOptions);
  }

  getNote(noteId: string)
  {
     return this.httpClient.get<Note[]>(this.baseUrl+'/notes', this.httpOptions).pipe(map((notes:Note[])=>notes.filter(note => note.id===noteId)));
  }

  getFilterNotes(categId:string)
  {
    return this.httpClient.get<Note[]>(this.baseUrl+'/notes', this.httpOptions).pipe(map((notes:Note[])=>notes.filter(note => note.categoryId===categId)));
  }

  getSearchedNotes(inputSearch:string)
  {
    return this.httpClient.get<Note[]>(this.baseUrl+'/notes', this.httpOptions).pipe(map((notes:Note[])=>notes.filter(nota => nota.title.includes(inputSearch)||nota.description.includes(inputSearch))));
  }

  getFilterSearchedNotes(categId:string,inputSearch:string)
  {
    return this.httpClient.get<Note[]>(this.baseUrl+'/notes', this.httpOptions).pipe(map((notes:Note[])=>notes.filter(nota => ((nota.title.includes(inputSearch)||nota.description.includes(inputSearch)) && nota.categoryId===categId))));
  }

  addNote(note: Note)
  { 
    return this.httpClient.post(this.baseUrl+'/notes',note,this.httpOptions)
  }

  editNote(noteId:string, note: Note) {
    return this.httpClient.put(this.baseUrl + "/notes/" + noteId, note ,this.httpOptions)
  }


  deleteNote(noteId:string)
  {
    return this.httpClient.delete(this.baseUrl+"/"+noteId, this.httpOptions);
  }


  //code before http

  // getNotes() {
  //   return this.notes;
  // }

  // getFiltredNotes(categoryId: string)
  // {
  //   // return this.notes.filter((nota)=>{
  //   //   nota.categoryId === categoryId
  //   // });
  //   return this.notes.filter(nota => nota.categoryId===categoryId)
  // }

  // getSearchedTitle(inputSearch:string)
  // { 
  //   if(inputSearch!='')
  //   return this.notes.filter(nota => nota.title.includes(inputSearch)||nota.description.includes(inputSearch))
  //   else
  //   return this.notes;
  // }

  // getFiltredByCategTitle(categoryId, inputSearch)
  // {
  //   return this.notes.filter(nota => nota.categoryId===categoryId && (nota.title.includes(inputSearch)||nota.description.includes(inputSearch)&&inputSearch!=''))
  // }

  // addNote(title: string, description: string, filter:string)
  // { 
  //   let newNote:Note = {
  //     id: "Id"+(this.notes.length+1),
  //     title: title,
  //     description: description,
  //     categoryId: filter,
  //     color: "#cc99ff"
  //   };

  //   this.notes.push(newNote);
  //   console.log(newNote);
  // }
  
}