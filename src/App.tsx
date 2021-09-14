import React , {useState} from 'react';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

interface Todo {
	id : string , 
	text :string
}
const App: React.FC = () => {
	const [todos , setTodos] = useState<Todo[]>([])
	// const todos = [{ id: 't1', text: 'finish the course' }];	
	const AddTodoHandler = (text : string)=>{
		//old fasion of update state
		// const newtodos = [...todos] ;
		// newtodos.push({id:Math.random().toString() , text: text})
		// setTodos(newtodos)
		//new fashion 
		setTodos(pre =>[
			...pre ,
			{id : Math.random().toString() , text}
		])
	}
	const handleDelete= (id :string)=>{
		let newtodos : Todo[] = [...todos] ;
		newtodos = newtodos.filter(m=> m.id !== id) ;
		setTodos(prev => prev = newtodos)

	}
  return (
    <div className="App">
		<NewTodo add = {AddTodoHandler}/>
		<TodoList items={todos} handleDelete={handleDelete}/>

    </div>
  );
};

export default App;