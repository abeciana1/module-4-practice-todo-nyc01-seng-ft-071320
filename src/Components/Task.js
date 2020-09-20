import React from 'react'

class Task extends React.Component {

    deleteTask = (e) => {
        e.persist()
        // this.props.deleteTask(this.props.text)
        this.props.deleteTask(this.props.task)
    }

    render() {
        return (
            <div>
                <div className="task">
                    <div className="label">
                        {this.props.task.category}
                    </div>
                    <div className="text">
                        {this.props.task.text}
                    </div>
                    <button className="delete" onClick={this.deleteTask}>X</button>
                </div>
            </div>
        )
    }
}

export default Task