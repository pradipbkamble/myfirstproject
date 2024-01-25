import { Component, OnInit } from '@angular/core';
import { Itodos } from '../components/interface.ts/interface';
import {todopost } from '../components/const/const';


@Component({
  selector: 'app-skillsets',
  templateUrl: './skillsets.component.html',
  styleUrls: ['./skillsets.component.scss']
})
export class SkillsetsComponent implements OnInit {

todos:Array<Itodos> = todopost
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
