import {initialState} from "./initialState.js";
import {actionType} from "./actionTypes.js";

console.log("Entering the reducer function.");

/**
 * This is the reducer function for the simple calculator application.
 * 
 * @param {*} state 
 * @param {*} action 
 */
export const reducers = (state = initialState , action)  => {

    let x ,y ,total = new Number(0);

    switch(action.type){ 
        
        case actionType.ADD_NUMBER_ACTION:

            console.log("Reducing the ADD_NUMBER_ACTION.")
            
            x = action.x;
            y = action.y;

            total = new Number(x) + new Number(y); 
            
            return {x, y, total }


        case actionType.SUBTRACT_NUMBER_ACTION:

            console.log("Reducing the SUBTRACT_NUMBER_ACTION")

            x = action.x;
            y = action.y;

            total = new Number(x) - new Number(y) ;
            
            return {x, y, total}

        default:
            return state;
    
    }
}