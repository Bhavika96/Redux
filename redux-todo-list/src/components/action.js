// export const addTodo = "ADD_TODO"
// export const deleteTodo = "DELETE_TODO"
// export const removeTodo = "REMOVE_TODO"


export const addTodo = (data) => {
    return {
        type: "ADD_TODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: "DELETE_TODO",
        id
    }
}

