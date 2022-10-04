const defaultState = {
    clients:[],
}

export const clientReducer = (state = defaultState,action) =>{
    switch (action.type) {
        case "ADD_MANY_CLIENTS":
            return {...state,clients: [...state.clients,...action.payload]}
        case "ADD_CLIENT":
            return {...state,clients: [...state.clients, action.payload]}
        case "REMOVE_CLIENT":
            return {...state,clients: state.clients.filter(cl => cl.id !== action.payload)}
        default:
            return state
    }
}