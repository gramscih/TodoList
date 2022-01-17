import Task from "./Task";
import classes from "./TaskList.module.css";

const TaskList = (props) => {
  return (
    <section className={classes.todoListContainer}>
      <ul className={classes.todoList}>
        {props.todos.map((todo) => (
          <li key={Math.random().toString()}>
            <Task>{todo}</Task>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TaskList;
