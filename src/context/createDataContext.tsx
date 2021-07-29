import React, {useReducer} from "react";


export default(reducer, actions, defaultValue) => {
    const Context = React.createContext({isSignedIn:false, token: null, errorMessage: ''});

    const Provider = ({children})=>{
        const [state,dispatch] = useReducer(reducer, defaultValue);

        const boundActions = {};

        // call all posible action functions with dispatch and store their results
        for(let key in actions){
            boundActions[key] =  actions[key](dispatch);
        }

        return(
            <Context.Provider value = {{state,...boundActions}}>
                {children}
            </Context.Provider>
        );
    };

    return {Context, Provider};
};