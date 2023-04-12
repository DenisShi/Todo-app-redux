import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded: (state, action) => {
      if (action.payload.title.trim()) {
        const newTodo = {
          id: Date.now(),
          userId: 1,
          title: action.payload.title,
          completed: false,
        };
        state.push(newTodo);
      } else {
        return;
      }
    },

    todoToggle: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    todoDelete: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { todoAdded, todoToggle, todoDelete } = todoSlice.actions;

export default todoSlice.reducer;
