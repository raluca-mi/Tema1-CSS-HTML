import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {

  title: string= "Title";
  auxColor: string = "";
  onButtonColor: string="";

  constructor() { }

  ngOnInit(): void {
  }

  onButton() {
    this.title="The title is ";
    this.onButtonColor = this.auxColor;}
}
