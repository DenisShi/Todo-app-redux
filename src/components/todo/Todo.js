import styles from "./todo.module.scss";

import TodoHeader from "./TodoHeader";
import TodoBody from "./TodoBody";
import { useDispatch } from "react-redux";
import {
  todoComplete,
  todoDelete,
  todoAdded,
  todoEdit,
  editApply,
  editCancel,
} from "../../reducers/todoSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

function Todo() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  function onSubmit(event) {
    event.preventDefault();
    if (title) {
      dispatch(
        todoAdded({
          userId: 1,
          id: Date.now(),
          title,
          completed: false,
        })
      );
      setTitle("");
    }
  }

  function onComplete(id) {
    dispatch(todoComplete(id));
  }

  function onDelete(id) {
    dispatch(todoDelete(id));
  }

  function onEdit(id) {
    dispatch(todoEdit(id));
  }

  function onApply(id, title) {
    dispatch(editApply({ id, title }));
  }

  function onCancel(id) {
    dispatch(editCancel(id));
  }

  return (
    <div className={styles.wrapper}>
      <TodoHeader onSubmit={onSubmit} title={title} setTitle={setTitle} />
      <TodoBody
        onComplete={onComplete}
        onDelete={onDelete}
        onEdit={onEdit}
        onApply={onApply}
        onCancel={onCancel}
        todos={todos}
      />
    </div>
  );
}

export default Todo;
