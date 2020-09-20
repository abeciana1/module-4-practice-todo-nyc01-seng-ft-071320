import React from 'react';
import './App.css';
import { CATEGORIES } from './data'
import TaskContainer from './Containers/TaskContainer.js'
import ButtonContainer from './Containers/ButtonContainer.js'

class App extends React.Component {

  state = {
    defaultSelect: 'All',
    tasks: [
      {
        text: 'Buy rice',
        category: 'Food'
      },
      {
        text: 'Save a tenner',
        category: 'Money'
      },
      {
        text: 'Build a todo app',
        category: 'Code'
      },
      {
        text: 'Build todo API',
        category: 'Code'
      },
      {
        text: 'Get an ISA',
        category: 'Money'
      },
      {
        text: 'Cook rice',
        category: 'Food'
      },
      {
        text: 'Tidy house',
        category: 'Misc'
      }
    ],
    categories: CATEGORIES,
    catFiltered: []
  }

  componentDidMount() {
    this.setState({
      catFiltered: this.state.tasks
    })
  }

  buttonSelect = (e) => {
    let filterArr = this.state.tasks.filter(task => task.category === e.target.textContent)
      this.setState({
        catFiltered: filterArr
      })
    if(e.target.textContent === this.state.defaultSelect) {
      this.setState({
        catFiltered: this.state.tasks
      })
    } 
  }

  // deleteTask = (obj) => {
  //   let filteredArr = []
  //   filteredArr.push(obj)
  //   console.log(filteredArr)

  // }

  deleteTask = task => {
    this.setState({
      catFiltered: this.state.catFiltered.filter(
        t => !(t.text === task.text && t.category === task.category)
      )
    })
  }

  render() {
    return (
      <div className="App">
        <h2>My tasks</h2>
        <ButtonContainer categories={this.state.categories} buttonSelect={this.buttonSelect} />
        <TaskContainer tasks={this.state.catFiltered} deleteTask={this.deleteTask} />
      </div>
    );
  }
}


export default App;
