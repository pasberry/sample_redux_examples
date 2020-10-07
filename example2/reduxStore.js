import {reducers as reducer} from "./reducers.js";
import {createAddAction , createSubAction} from "./action_creators.js"

console.log("Entering the redux store.");
export const reduxStore = Redux.createStore(reducer);

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

