/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems,removetask }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem todoDate={item.dueDate} todoName={item.name} handle={removetask}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
