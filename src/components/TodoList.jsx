import React from "react";
import TodoListItem from "./TodoListItem"

export default function TodoList({taskList, onCompletedChange, onClickRemove}) {

  return (
    <div className="todo__list">
      {
        taskList.map((task, i) => <TodoListItem 
                                    key={`${task.text}_${i}`} 
                                    task={task} 
                                    onClickChange={() => onCompletedChange(i)} 
                                    onClickRemove={() => onClickRemove(i)} />
                                    )
      }
    </div>
  )
}