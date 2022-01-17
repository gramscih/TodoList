import { useState } from "react";

import Card from "../UI/Card";
import classes from "./HeaderTaskList.module.css";

const HeaderTaskList = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const enteredTodoChangeHandler = (event) => {
    setEnteredTodo(event.target.value);
  };

  const addTaskHandler = () => {
    props.onAddTodo(enteredTodo);
  };

  return (
    <section className={classes.headerContainer}>
      <Card>
        <p>New Todo:</p>
        <div className={classes.headerOptions}>
          <input
            type="text"
            value={enteredTodo}
            onChange={enteredTodoChangeHandler}
            className={classes.headerOptionsInput}
          />
          <button className={classes.headerOptionsBtn} onClick={addTaskHandler}>
            Add
          </button>
        </div>
      </Card>
    </section>
  );
};

export default HeaderTaskList;
