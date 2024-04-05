import { useState } from 'react';
import PropTypes from 'prop-types';
export function NewTodoForm({ onSubmit }) {
	const [newItem, setNewItem] = useState('');

	function handleSubmit(e) {
		e.preventDefault();
		if (newItem === '') return;
		onSubmit(newItem);
		setNewItem('');
	}

	return (
		<div>
			<form onSubmit={handleSubmit} className="new-item-from">
				<div className="form-row">
					<label htmlFor="item">new item</label>
					<input
						value={newItem}
						onChange={(e) => setNewItem(e.target.value)}
						type="text"
						id="item"
					/>
				</div>
				<button className="btn">Add</button>
			</form>
		</div>
	);
}
NewTodoForm.propTypes = {
	onSubmit: PropTypes.func.isRequired, // Add prop validation for onSubmit
};
