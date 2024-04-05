import PropTypes from 'prop-types';

const HelloName = ({ name }) => {
	return (
		<>
			<div>
				<p>hello {name}</p>
			</div>
		</>
	);
};
HelloName.propTypes = {
	name: PropTypes.string.isRequired,
};
export function Hello() {
	return (
		<>
			<div>
				<h1>Vite + React</h1>
				<HelloName name="world" />
			</div>
		</>
	);
}
