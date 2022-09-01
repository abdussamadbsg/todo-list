import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { BiCheckCircle } from 'react-icons/bi'

function TodoItem(props) {

    const {todo, removeTodo, completeTodo} = props

  return (
    <div className={todo.completed ? 'todo-row complete' : 'todo-row'}>
        {todo.text}
        <div className='icons-container'>
            <RiCloseCircleLine style={{ marginRight: 5 }} onClick={ () => removeTodo(todo.id)} />
            <BiCheckCircle onClick={ () => completeTodo(todo.id)}/>
        </div>
    </div>
  )
}

export default TodoItem