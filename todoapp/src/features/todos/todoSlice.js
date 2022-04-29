import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/Data/db.json";

const initialState = {
  todo: data,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.todo.Tasks.push(payload);
    },
    updateTodo: (state, { payload }) => {
      state.todo.Tasks.map((item, index) => {
        if (item.id === payload.id) {
          state.todo.Tasks[index] = payload;
          return item;
        }
      });
    },
  },
});
export const { addTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
