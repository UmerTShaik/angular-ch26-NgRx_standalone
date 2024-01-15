import { createSelector } from "@ngrx/store";

export const selectCount = (state: {counter:number}) => state.counter ;//selector funciton, 
//state means overall store .you reutrn state.counter
export const selectDoubleCount = createSelector(selectCount, (state) => state*2);
//you can use selcotrfucntionalso to define a selctor .here is state is we get from selectCount and then we mutily by 2