import {initialState} from "./initialState.js";
import reducerFactory from  "./reducerFactory.js";
import {actionType} from "./actionTypes.js";


/**
 * This object contains a key/value pair of available math action types 
 * to reducer functions that act upon them.
 */
const actionsMap = {

    [actionType.ADD_NUMBER_ACTION] : (state, action)  => {

        console.log("Reducing the ADD_NUMBER_ACTION.");
            
        const x = action.x;
        const y = action.y;
        
        const total = new Number(x) + new Number(y); 

        const errorMsg = null;
        
        return {x, y, total };
    } ,

    [actionType.SUBTRACT_NUMBER_ACTION] : (state, action)  => {

        console.log("Reducing the SUBTRACT_NUMBER_ACTION");

        const x = action.x;
        const y = action.y;

        const total = new Number(x) - new Number(y) ;

        const errorMsg = null;
            
        return {x, y, total};
    },

    [actionType.DIVIDE_NUMBER_ACTION] :  (state, action)  => {

        console.log("Reducing the DIVIDE_NUMBER_ACTION");

        const x = action.x;
        const y = action.y;

        const total = new Number(x) / new Number(y) ;

        const errorMsg = null;
        
        return {x, y, total};
    },

    [actionType.MULTIPLE_NUMBER_ACTION] : (state, action) => {

        console.log("Reducing the MULTIPLE_NUMBER_ACTION");

        const x = action.x;
        const y = action.y;

        const total = new Number(x) * new Number(y);

        const errorMsg = null;

        return {x , y, total};

    },

    [actionType.DIVIDE_BY_ZERO_ACTION]: (state, action) => {

        console.log("Reducing the DIVIDE_BY_ZERO_ACTION");

        const x = action.x;
        const y = action.y;

        const total = 0;

        const errorMsg = action.errorMsg;

        return {x, y, total, errorMsg};

    }
}

export default reducerFactory(initialState , actionsMap);