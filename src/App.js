import React from "react";
import AddTodoItem from "./components/AddTodoItem";
import TodoList from "./components/TodoList";
import "./styles/app.scss";

class App extends React.Component {

  // const [taskList, setTaskList] = React.useState([]);
  state = {taskList: []}
  onAddTask = (text) => {
    if (text) {
      this.setState( ({taskList}) => ({ 
        taskList:[ ...taskList, {text: text, isCompleted: false}]
      }));
    }
    
  }
  onCompletedChangeHandler = (index) => {
   const newTaskList = this.state.taskList.map((task, i) => {
     if(index === i) task.isCompleted = !task.isCompleted
     return task
   })
   this.setState(newTaskList);
  }
  onClickRemoveHandler = (index) => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      const newTaskList = this.state.taskList.filter((task, i) => index !== i);
      this.setState({taskList: newTaskList});
    }
    
  } 
  render() {
    return (
      <div className="App">
        <div className="todo">
          <div className="todo__header">
            <h4>Список задач</h4>
          </div>
          <AddTodoItem placeholder="Введите текст задачи..." onAddTask={this.onAddTask} />
          <TodoList taskList={this.state.taskList} onCompletedChange={this.onCompletedChangeHandler} onClickRemove={this.onClickRemoveHandler} />
        </div>
      </div>
    )
  }
   
}

export default App;
