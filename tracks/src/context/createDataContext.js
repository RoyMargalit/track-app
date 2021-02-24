import React, { useReducer } from 'react'

export default (reducer, actions, defaultValue) => {
    const Context = React.createContext();

    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, defaultValue)

        const boundActios = {};
        for (key in actions) {
            boundActios[key] = actions[key](dispatch)
        }
        return <Context.Provider value={{ state, ...boundActios }} >
            {children}
        </Context.Provider>
    }
    return { Context: Context, Provider: Provider }
}