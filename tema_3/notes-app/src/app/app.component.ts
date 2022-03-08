import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'notes-app';
  
  firstname:string="Muntean";
  surname:string="Raluca";
  age:number=21;

  names: string[]=["Maria","Cristina","Ana","Andrei","Dragos"];
  birthdays: Date[]=[new Date(2,3,2001), new Date(1,4,2000),new Date(5,3,2002),new Date(6,5,2001)];
  
  color: string="red";

}
