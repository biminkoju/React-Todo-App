import { useEffect, useState, Fragment } from 'react';
import './styles.css';
import { NewTodoForm } from './NewTodoForm';
import { Hello } from './Hello';
import { TodoList } from './TodoList';

export default function App() {
	const [todos, setTodos] = useState(() => {
		const localValue = localStorage.getItem('todos');
		if (localValue === null) {
			return [];
		}
		return JSON.parse(localValue);
	});

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	function addTodo(title) {
		setTodos((currentTodos) => {
			return [
				...currentTodos,
				{ id: crypto.randomUUID(), title, completed: false },
			];
		});
	}

	function toggleTodo(id, completed) {
		setTodos((currentTodos) => {
			return currentTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, completed };
				}
				return todo;
			});
		});
	}
	function deleteTodo(id) {
		setTodos((currentTodos) => {
			return currentTodos.filter((todo) => todo.id !== id);
		});
	}

	return (
		<Fragment>
			<Hello />
			<NewTodoForm onSubmit={addTodo} />
			<h1 className="header">To Do</h1>
			<TodoList
				todos={todos}
				toggleTodo={toggleTodo}
				deleteTodo={deleteTodo}
			/>
		</Fragment>
	);
}
