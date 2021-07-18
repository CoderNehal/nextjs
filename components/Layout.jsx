import React from 'react';
import Navbar from './Navbar';
const styles = {
	background: '#F48FB1',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	height: '100vh',
};
const Layout = (props) => {
	return (
		<div>
			<Navbar />
			<div style={styles}>{props.children}</div>
		</div>
	);
};

export default Layout;
