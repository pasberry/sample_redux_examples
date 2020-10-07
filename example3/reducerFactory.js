
/**
 * This higher order function takes the initial state of the application and a map of available 
 * actions and returns a function that in turn uses the provided initial state or client supplied state 
 * and a client supplied redux action and produces the correct reducer function. 
 * 
 */
export default (initialState, actionMap) => (state = initialState , action) => {
    
    const reducerFunction = actionMap[action.type];

    if(reducerFunction) {
        return reducerFunction(state, action);
    }

    return state;
}