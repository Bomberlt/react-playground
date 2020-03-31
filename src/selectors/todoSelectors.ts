import { RootState } from "../reducers";


export const todoItemsSelector = (state: RootState) => state.todoList || [];