import { Checkbox } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import Card from "../UI/Card";
import classes from "./Task.module.css";

const Task = (props) => {
  return (
    <Card className={classes.taskContainer}>
      <Checkbox />
      {props.children}
      <div>
        <IconButton color="primary" aria-label="delete">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default Task;
