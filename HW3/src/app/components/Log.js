import React from 'react';
import PropTypes from 'prop-types';
import Modal from './Modal';


export default class Log extends React.Component {
	render() {
		return (
			<div>
				<button data-toggle="modal" data-target="#myModal" type="button" className="btn btn-default navbar-btn button_log">Sign in</button>
				<Modal/>
			</div>	
		);
	}
}