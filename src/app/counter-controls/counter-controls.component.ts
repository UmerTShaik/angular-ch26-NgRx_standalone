import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {  increment , decrement} from '../store/counter.actions';


@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
  standalone: true,
})
export class CounterControlsComponent {
  //constructor(private counterService: CounterService) {}

  // increment() {
  //   this.counterService.increment();
  // }

  // decrement() {
  //   this.counterService.decrement();
  // }

  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment({value: 2}));
    //this.store.dispatch(new IncrementAction(2));
  }

  decrement() {
    this.store.dispatch(decrement({value:2}));
  }
}
