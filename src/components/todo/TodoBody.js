import styles from "./todo.module.scss";
import { useState } from "react";

function TodoBody({ onComplete, onDelete, onEdit, todos, onApply, onCancel }) {
  const [editTitle, setEditTitle] = useState("");

  return (
    <div className={styles.itemsContainer}>
      {todos.map((todo) => {
        return (
          <div
            key={todo.id}
            id={todo.id}
            className={`${
              todo.completed
                ? `${styles.completed} ${styles.item}`
                : styles.item
            }`}
          >
            <div
              className={`${
                todo.editing ? `${styles.edit} ` : `${styles.dNone}`
              }`}
            >
              <input
                className={styles.editTitle}
                defaultValue={todo.title}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <span
                onClick={() => onApply(todo.id, editTitle)}
                className={`${styles.editInputBtns} ${styles.apply} `}
              />
              <span
                onClick={() => onCancel(todo.id)}
                className={`${styles.editInputBtns} ${styles.cancel} `}
              />
            </div>

            <p className={styles.itemText}>{todo.title}</p>
            <div className={styles.btnContainer}>
              <div className={styles.btns}>
                <button
                  onClick={() => onEdit(todo.id, todo.title)}
                  className={styles.editBtns}
                >
                  Edit
                </button>

                <button
                  onClick={() => onComplete(todo.id)}
                  className={styles.editBtns}
                >
                  Completed
                </button>
              </div>
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
  );
}
export default TodoBody;
