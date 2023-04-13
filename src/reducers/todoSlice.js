import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      const newTodo = {
        id: Date.now(),
        userId: 1,
        title: action.payload.title,
        completed: false,
        editing: false,
      };
      state.push(newTodo);
    },
    todoComplete: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    todoDelete: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    todoEdit: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.editing = !todo.editing;
      }
    },
    editApply: (state, action) => {
      const { id, title } = action.payload;
      const todo = state.find((todo) => todo.id === id);
      todo.title = title;
      todo.editing = false;
    },
    editCancel: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      todo.editing = false;
    },
  },
});

export const {
  todoAdded,
  todoComplete,
  todoDelete,
  todoEdit,
  editApply,
  editCancel,
} = todoSlice.actions;

export default todoSlice.reducer;
