import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  dummyId: string='2';
  constructor(private _router: Router,private _activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(parameter => {console.log(parameter);
    this.dummyId=parameter['id'];})

  }

}
