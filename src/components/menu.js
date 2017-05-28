import React from 'react';

const Menu = ({onButtonClick}) => {
	return (
		<div className="menu">
			<button className="btn btn-danger" type="button" onClick={onButtonClick}>Change video size</button>
		</div>
	)
}

export default Menu;