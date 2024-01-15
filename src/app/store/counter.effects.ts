import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment, init, set } from "./counter.actions";
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';

@Injectable()
export class CounterEffects{

    //take coutner and store it into ngrx store so when we 
    //reload the app we conitnue from that value in counter 
    loadCount = createEffect(() => this.actions$.pipe(
        ofType(init),
        switchMap(()=>{     //lets you to new a observable chain
            const storedCounter = localStorage.getItem('count');
            if(storedCounter){
            return of(set({value: +storedCounter}));//swithcMap needs observable. convert to a number so use +
                 }
            return of(set({value:0}));//of fn return observable by qrapping the value
        })
    ))

    saveCount = createEffect(
        ()=> this.actions$.pipe(
        ofType(increment, decrement),//lets us define for which aciton we need to execute code here
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {//from store we get aciton and counter so we use array
            console.log(action);
            localStorage.setItem('count', counter.toString());
        })    //execute code some action you want to trigger to backend 
        // or perform side efcct without any trigger not dispacth hereafter
        //.Here we use tap operator to register a fun that doesnt yield new observable once its done
        
    ), {dispatch:false} );

    //older version of ngrx syntax
    // @Effect({dispatch: false})
    // saveCount = this.actions$.pipe(
    //     ofType(increment, decrement),//lets us define for which aciton we need to execute code here
    //     tap((action) => {
    //         console.log(action);
    //         localStorage.setItem('count', action.value.toString());
    //     })    //execute code some action you want to trigger to backend 
    //     // or perform side efcct without any trigger not dispacth hereafter
    //     //.Here we use tap operator to register a fun that doesnt yield new observable once its done
        
    // ) ;

    constructor(private actions$:Actions , private store:Store<{counter:number}>){//since we need to injet soemthing(Actions not Action) here in this class, $ indicates its an obersvable

    }
}