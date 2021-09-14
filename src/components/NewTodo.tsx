import React  , {useRef} from 'react'
import "./NewTodo.css"

type NewTodoProps = {
	add: (todoText: string) => void;
  };
const NewTodo: React.FC<NewTodoProps> = (props) => {
	const textInputRef = useRef<HTMLInputElement>(null);
	const todoSubmitHandler = (e : React.FormEvent)=>{
		e.preventDefault()
		props.add(textInputRef.current!.value)
	}
	return (
		<form  onSubmit={todoSubmitHandler}> 
			<div>
				<label htmlFor="todo">Add new todo</label>
				<input type="text" id="todo-text"  ref={textInputRef}/>
			</div>
			<button type="submit">ADD TODO</button>

		</form>
	)
}

export default NewTodo
