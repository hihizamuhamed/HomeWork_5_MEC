import {types} from "./types";

export function createUserAction(user) {
    return async function (dispatch) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const data = await response.json()

        dispatch({
            type: types.CREATE_USER,
            payload: data
        })

        dispatch({
            type: types.SHOW_SUCCESS_MESSAGE
        })
        setTimeout(() => {
            dispatch({
                type: types.HIDE_SUCCESS_MESSAGE
            })
        }, 5000)
        console.log(user)
    }
}