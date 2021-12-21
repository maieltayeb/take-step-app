import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./task-submitted-frame.css";

import InsideNav from "../../Layout/Navbar/insidenav";
import TaskSubmit from "../../Components/Task-submitted/Task-submitted";

const TaskSubmittedFrame = props => {
  return (
    <div>
      <InsideNav />
      <div className="container-submit-task ">
        <div className="task-submitted-title ">
          <p className="task-submitted-title-p">Tasks Submited</p>
        </div>

        <TaskSubmit />
      </div>
    </div>
  );
};
export default TaskSubmittedFrame;
