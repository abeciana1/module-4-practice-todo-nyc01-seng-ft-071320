import React from 'react'
import Task from '../Components/Task.js';

class TaskContainer extends React.Component {

    tasks = () => {
        // console.log(this.props)
        return this.props.tasks.map(task => <Task task={task} deleteTask={this.props.deleteTask} />);
    }


    render() {
        return (
            <div className="tasks">
                <h5>TaskContainer</h5>
                {this.tasks()}
            </div>
        )
    }
}

export default TaskContainer