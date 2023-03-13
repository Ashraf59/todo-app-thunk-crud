
import { toggled } from '../actions';

const updateTodoStatus = (todoId, currentStatus) => {
    return async (dispatch) => {
        const res = await fetch(`http://localhost:9000/todos/${todoId}`, {
            method: "PATCH",
            body: JSON.stringify({
                completed: !currentStatus
            })
        });
        const todo = await res.json();
        dispatch(toggled(todo.id))
    }
};

export default updateTodoStatus;