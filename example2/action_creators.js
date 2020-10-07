import { actionType } from "./actionTypes.js";

console.log("Entering the action creator.");

/**
 * This function is used to create the action that will add x and y
 * 
 * If no value is given, the x and y values will be defaulted to zero
 * 
 * @param {*} x 
 * @param {*} y 
 */
export const createAddAction = (x = 0 , y = 0) => {

    return {

        type : actionType.ADD_NUMBER_ACTION,
        x,
        y

    }
}

/**
 * This function is used to create the action that will subtract x and y.
 * 
 * 
 * 
 * @param {*} x 
 * @param {*} y 
 */
export const createSubAction = (x = 0, y = 0) => {

    return {

        type : actionType.SUBTRACT_NUMBER_ACTION,
        x,
        y
    }
}