import reducers from "./mathReducers.js";
import {createAddAction , createSubAction, createDivAction, createMultiAction, createDivByZeroAction} from "./action_creators.js"

console.log("Entering the redux store.");
export const reduxStore = Redux.createStore(reducers);

/**
 * Dispatches the action type to add the numbers represented by x and y.
 * 
 * @param {*} x 
 * @param {*} y 
 */
export const processAddition = (x , y) => {
    reduxStore.dispatch(createAddAction(x , y));
}

/**
 * Dispatches the action type to subtract the numbers represented by x and y.
 * 
 * @param {*} x 
 * @param {*} y 
 */
export const processSubtraction = (x, y) => {
    reduxStore.dispatch(createSubAction(x , y));
}

/**
 * Dispatches the action type to multiple the numbers represented by x and y.
 * 
 * @param {*} x 
 * @param {*} y 
 */
export const processMultiplication = (x, y) => {
    reduxStore.dispatch(createMultiAction(x , y));
}

/**
 * Dispatches the action type to divide the numbers repersented by x and y.
 * 
 * @param {*} x 
 * @param {*} y 
 */
export const processDivision = (x, y) => {
    
    if (new Number(y) == 0){
        reduxStore.dispatch(createDivByZeroAction("Dividing by Zero will not be tolerated."));
    
    } else {
        reduxStore.dispatch(createDivAction(x , y));
    }
}

