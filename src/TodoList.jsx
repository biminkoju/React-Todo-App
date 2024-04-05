import { TodoItem } from './TodoItem';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
export function TodoList({ todos, toggleTodo, deleteTodo }) {
	return (
		<Fragment>
			<ul className="list">
				{todos.length === 0 && "No Todo's"}
				{todos.map((todo) => {
					return (
						<TodoItem
							{...todo}
							key={todo.key}
							toggleTodo={toggleTodo}
							deleteTodo={deleteTodo}
						/>
					);
				})}
			</ul>
		</Fragment>
	);
}
TodoList.propTypes = {
	todos: PropTypes.arrayOf(
		PropTypes.shape({
			key: PropTypes.number.isRequired,
			completed: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
			title: PropTypes.string.isRequired,
		})
	).isRequired,
	toggleTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};
