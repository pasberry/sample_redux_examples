
/**
 * This factory function will create an action creator function by taking 
 * the action type and the list of property fields. 
 * 
 * The resulting function should be supplied with a list of values in the exact
 * order as the property names, so that the appropriate action can be created. 
 * 
 * @param {*} type - the action type to use
 * @param  {...any} propertyFields - the properties needed on the action object
 */
export const actionFactory = (type , ...propertyFields) => (...args) => {

    const reduxAction = {type};

    propertyFields.forEach((property , index) => {

        reduxAction[propertyFields[index]] = args[index];
    });

    return reduxAction;
};