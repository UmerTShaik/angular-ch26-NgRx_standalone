import { Action,createReducer , on} from "@ngrx/store";
//import { CoutnerActions, INCREMENT, IncrementAction } from "./counter.actions";
import { decrement, increment, set } from "./counter.actions";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment , (state, action) => state + action.value),
    on(decrement, (state, action)=> state-action.value),
    on(set, (state, action) =>action.value)
);

//if your pject us ugin older angular and ngrx then use this
// export function counterReducer(state = initialState){
//     return state;
// }
//below is same as above but logic added
// export function counterReducer(state = initialState , action:CoutnerActions | Action){//Add Action as reducer is triggered for everyaction or any aciton
//     if(action.type === INCREMENT){
//         return state + (action as IncrementAction).value;//add brackets to avoid typsecript coimplaints as we know value is in action
//     }
//     return state;
// }