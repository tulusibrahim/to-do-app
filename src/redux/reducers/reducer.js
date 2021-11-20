let initState = {
    todo: [],
    done: []
}

export const reducer = (state = initState, action) => {
    console.log(action)
    if (action.type === 'ADD') {
        return {
            ...state,
            todo: [...state.todo, action.payload],
        }
    }
    else if (action.type === 'DELETE') {
        let filter = state.todo.filter(item => item.id !== action.payload)
        return {
            ...state,
            todo: filter,
        }
    }
    else if (action.type === 'DONE') {
        let finish = state.todo.filter(item => item.id === action.payload.id)
        let unDone = state.todo.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            todo: unDone,
            done: [...state.done, ...finish],
        }
    }
    else if (action.type === 'DELETE_FROM_DONE') {
        let finish = state.done.filter(item => item.id !== action.payload.id)
        return {
            ...state,
            done: finish,
        }
    }
    return state
}