import { colorSelected } from "../actions";


const colorStatus = (todoId, color) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                color: color
            }),
            headers: {
                "Content-type" : "application/json; charset=UTF-8"
            }
        });
        const todo = await res.json();
        dispatch(colorSelected(todo.id, todo.color))
    }
};

export default colorStatus;