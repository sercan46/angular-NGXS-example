import { Action, State, StateContext } from "@ngxs/store";
import { Decrement, Increment, Reset } from "./counter_action";

@State<number>({
    name:'counter',
    defaults:0
})
export class CounterState{

  @Action(Increment)
  Increment(store:StateContext<number>){
    const counter=store.getState();
    store.setState(counter+1)
  }
  
  @Action(Decrement)
  Decrement(store:StateContext<number>){
    const counter=store.getState();
    store.setState(counter-1)
  }
  
  @Action(Reset)
  Reset(store:StateContext<number>,action:Reset){
    const counter=store.getState();
    store.setState(action.payload.value);
  }
}