import React, { useState } from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import ListItem from "./components/ListItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  const [taskList, setTaskList] = useState({
    data: [],
  });
  const [newTaskValue, setNewTaskValue] = useState("");

  const actionAddTask = () => {
    if (newTaskValue.trim() === "") {
      return false;
    }
    const newData = taskList.data;
    newData.push(newTaskValue);
    setTaskList({ data: newData });
    setNewTaskValue("");
  };

  return (
 
      <div className="container mx-auto col-3 border mt-3">
        <h1 className="text-center">Title Listing</h1>
        
        <br />
        {/* input */}
            <Input placeholderText="Testing"
              value={newTaskValue}
              onChange={(e) => setNewTaskValue(e.target.value)} />
            <Button text="Add Task" onClick={actionAddTask} />
        {/* input */}

        {/* list */}
        <div className="text-center m-2">
          <ListItem newData={taskList.data} />
        </div>
        {/* list */}
        
        <div className="offset-3">
        <Button
          backgroundColor="#e74c3c"
          text="Clear"
          onClick={() => setTaskList({ data: [] })}
        />
        <Button
          text="Recommendation"
          onClick={() => setNewTaskValue("Task Rekomendasi")}
        />
        </div>


      </div>
  );
};

export default App;
