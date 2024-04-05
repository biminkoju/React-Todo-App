import PropTypes from 'prop-types';
import { Fragment } from 'react';

const HelloName = ({ name }) => {
	return (
		<Fragment>
			<div>
				<p>hello {name}</p>
			</div>
		</Fragment>
	);
};
HelloName.propTypes = {
	name: PropTypes.string.isRequired,
};
export function Hello() {
	return (
		<Fragment>
			<div>
				<h1>Vite + React</h1>
				<HelloName name="world" />
			</div>
		</Fragment>
	);
}
