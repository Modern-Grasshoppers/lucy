import React from 'react';

var TasksLayout = (props) => (

    <div>
      <div className='container content'>
        <div>
          <UserSignout
            signout={props.signout}
          />
        </div>

        <div className='container form'>
          <TaskEntry
            handleChange={props.handleChange}
            handleSubmit={props.handleSubmit}
          />
        </div>

        <div className="container tasks">
          <CurrentTasksView
            tasks={props.currentTaskArray}
            onStartButtonClick={props.onStartButtonClick}
            onStopButtonClick={props.onStopButtonClick}
          />
        </div>

        <div className='container tasks'>
          <CompletedTaskList
            tasks={props.tasks}
          />
        </div>
      </div>
    </div>
)

export default TasksLayout;