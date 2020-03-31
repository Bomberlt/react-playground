import { TodoAction, TodoActions, Todo } from "../model";
import { todosRef } from "../components/Firebase/firebase";

export function addTodo(todo: Todo) {
	return function(dispatch: any) {
		return todosRef.push().set(todo).then(
			() => dispatch({
				type: TodoActions.ADD_TODO,
				payload: todo,
			})
		);
	};
};

// Async Function expample with redux-thunk
export function completeTodo(todoId: number) {
	// here you could do API eg

	return (dispatch: Function, getState: Function) => {
		dispatch({ type: TodoActions.COMPLETE_TODO, payload: todoId });
	};
}

export function uncompleteTodo(todoId: number): TodoAction {
	return {
		type: TodoActions.UNCOMPLETE_TODO,
		payload: todoId,
	};
}

export function deleteTodo(todoId: number): TodoAction {
	return {
		type: TodoActions.DELETE_TODO,
		payload: todoId,
	};
}

export const fetchToDos = () => async (dispatch: Function) => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: TodoActions.TODOS_LOADED,
      payload: snapshot.val()
    });
  });
};
