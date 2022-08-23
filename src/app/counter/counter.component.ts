import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent  {
  @Input() total:number;
  @Output() increment= new EventEmitter();
  @Output() decrement= new EventEmitter();
  @Output() reset = new EventEmitter();

 }
