import PropTypes from 'prop-types';
import { Fragment } from 'react';
export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
	return (
		<Fragment>
			<li>
				<label>
					<input
						type="checkbox"
						checked={completed}
						onChange={(e) => {
							toggleTodo(id, e.target.checked);
						}}
					/>
					{title}
				</label>
				<button
					onClick={() => deleteTodo(id)}
					className="btn btn-Danger"
				>
					Delete
				</button>
			</li>
		</Fragment>
	);
}
TodoItem.propTypes = {
	completed: PropTypes.bool.isRequired,
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	toggleTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired,
};
