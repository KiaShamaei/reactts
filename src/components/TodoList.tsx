import React from 'react'
import "./TodoList.css"

interface TodoListProps {
	items: { id: string, text: string }[] , 
	handleDelete : (id : string)=>void
}

const TodoList: React.FC<TodoListProps> = (props) => {
	// const todos = [{ id: 't1', text: 'finish the course' }];	
	return (
		<ul>
			{props.items.map(e => 
			<li key={e.id}>
				<span>{e.text}</span>
				<button onClick={()=>props.handleDelete(e.id)}>Delete</button>
			</li>)}
		</ul>
	)
}
export default TodoList