import  {actionType}  from "./actionTypes.js";
import {actionFactory as actionCreatorFactory } from "./actionCreatorFactory.js";

console.log("Entering the action creator.");

/**
 * This function is used to create the action that will add x and y
 * 
 * If no value is given, the x and y values will be defaulted to zero
 * 
 * @param {*} x 
 * @param {*} y 
 */
export const createAddAction = actionCreatorFactory( actionType.ADD_NUMBER_ACTION , 'x' , 'y');

/**
 * This function is used to create the action that will subtract x and y. 
 * 
 * @param {*} x 
 * @param {*} y 
 */
export const createSubAction = actionCreatorFactory(actionType.SUBTRACT_NUMBER_ACTION, 'x' , 'y');


/**
 * This function is used to create the action that will divide x and y.
 * 
 * @param {*} x 
 * @param {*} y 
 */
export const createDivAction = actionCreatorFactory(actionType.DIVIDE_NUMBER_ACTION, 'x', 'y');

/**
 * This function is used to alert the user that division by zero will cause the singularity ending all
 * life in the multiverse.
 * 
 * @param {*} x
 * @param {*} y
 */
export const createDivByZeroAction = actionCreatorFactory(actionType.DIVIDE_BY_ZERO_ACTION, 'errorMsg');

/**
 * This function is used to create the action that will multiple x and y.
 * @param {*} x 
 * @param {*} y 
 */
export const createMultiAction = actionCreatorFactory(actionType.MULTIPLE_NUMBER_ACTION , 'x' , 'y');



