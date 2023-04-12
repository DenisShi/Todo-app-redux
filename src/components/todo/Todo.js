import styles from "./todo.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { todoAdded, todoToggle, todoDelete } from "../../reducers/todoSlice";
import { useSelector } from "react-redux";

function Todo() {
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  function onSubmit(event) {
    event.preventDefault();

    dispatch(
      todoAdded({
        userId: 1,
        id: Date.now(),
        title,
        completed,
      })
    );
    setTitle("");
    setCompleted(false);
  }

  function onToggle(id) {
    dispatch(todoToggle(id));
  }

  function onDelete(id) {
    dispatch(todoDelete(id));
  }

  return (
    <div className={styles.wrapper}>
      <form onSubmit={onSubmit} className={styles.inputForm}>
        <div className={styles.input}>
          <input
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            name="title"
          />
          <span
            onClick={() => setTitle("")}
            className={`${title ? styles.clearButton : null}`}
          />
        </div>
        <div>
          <button className={styles.button}>Add</button>
        </div>
      </form>

      <div className={styles.itemsContainer}>
        {todos.map((todo) => {
          return (
            <div
              onClick={() => onToggle(todo.id)}
              key={todo.id}
              id={todo.id}
              className={`${
                todo.completed
                  ? `${styles.completed} ${styles.item}`
                  : styles.item
              }`}
            >
              <p className={styles.itemText}>{todo.title}</p>
              <div>
                <button
                  onClick={() => onDelete(todo.id)}
                  className={styles.button}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Todo;
