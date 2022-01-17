import { useState } from "react";

import classes from "./Clock.module.css";

const Clock = (props) => {
  const [hour, setHour] = useState(30);
  const [min, setmin] = useState(0);

  return (
    <div className={classes.main}>
      <div>{hour}</div>
      <span>:</span>
      <div>{min}</div>
      <button>Play</button>
    </div>
  );
};

export default Clock;
