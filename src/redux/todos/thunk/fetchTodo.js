import { loaded } from "../actions";



const fetchTodo = async (dispatch) => {
   const res = await fetch("http://localhost:9000/todos");
   const todos = await res.json()

   dispatch(loaded(todos))
};

export default fetchTodo;