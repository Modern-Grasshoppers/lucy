import React from 'react';
import moment from 'moment';

var CompletedTaskListItems = (props) => {
  return (
    <div className="task list entry">
      <div className="list-body">
        <div className="task-entry-task" id={props.key}>Task: <span>{props.task}</span></div>
        <div className="task-entry-project">Project: <span>{props.project}</span></div>
        <div className="task-entry-date">Start: <span>{moment(props.start_time).format("ddd, MMM Do YY, h:mm a")}</span></div>
        <div className="task-entry-date">End: <span>{moment(props.end_time).format("ddd, MMM Do YY, h:mm a")}</span></div>
        <div className="task-entry-time">Total Time: <span>{props.time} min</span></div>
      </div>
    </div>
  );
};

CompletedTaskListItems.propTypes = {
  task: React.PropTypes.object
};

window.CompletedTaskListItems = CompletedTaskListItems;
