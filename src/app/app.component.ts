import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Decrement, Increment, Reset } from './store/counter/counter_action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  @Select(state=>state.counter) counter$: Observable<number>;

  constructor(private store:Store) {

  }
  ngOnInit(): void {
  }
  increment=()=>this.store.dispatch(new Increment());
  decrement=()=>this.store.dispatch(new Decrement());
  reset=()=>this.store.dispatch(new Reset({value:0}));
}
