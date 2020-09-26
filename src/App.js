import React from "react";
import AddTodoItem from "./components/AddTodoItem";
import TodoList from "./components/TodoList";
import "./styles/app.scss";

function App() {

  const [taskList, setTaskList] = React.useState([]);
  const onAddTask = (text) => {
    if (text) {
      setTaskList([...taskList, {text: text, isCompleted: false}]);
    }
    
  }
  const onCompletedChangeHandler = (index) => {
   const newTaskList = taskList.map((task, i) => {
     if(index === i) task.isCompleted = !task.isCompleted
     return task
   })
   setTaskList(newTaskList);
  }
  const onClickRemoveHandler = (index) => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      const newTaskList = taskList.filter((task, i) => index !== i);
      setTaskList(newTaskList);
    }
    
  } 
  return (
    <div className="App">
      <div className="todo">
        <div className="todo__header">
          <h4>Список задач</h4>
        </div>
        <AddTodoItem placeholder="Введите текст задачи..." onAddTask={onAddTask} />
        <TodoList taskList={taskList} onCompletedChange={onCompletedChangeHandler} onClickRemove={onClickRemoveHandler} />
      </div>
    </div>
  );
}

export default App;
