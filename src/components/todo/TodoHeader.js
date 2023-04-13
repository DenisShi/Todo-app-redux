import styles from "./todo.module.scss";

function TodoHeader({ onSubmit, title, setTitle }) {
  return (
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
  );
}

export default TodoHeader;
