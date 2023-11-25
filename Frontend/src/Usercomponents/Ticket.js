import React from 'react';
import { getAuthUser } from '../helper/Storage';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

import classes from '../UserStyle/Ticket.module.css';

const Ticket = props => {
	let id;
	const user = getAuthUser();
	const navigate = useNavigate();
	const request = () => {
		if (user) {
			id = user.id;
			Axios.post('http://localhost:4000/request/create/' + props.id + '/' + id);
		} else {
			navigate('/login');
		}
	};

	return (
		<li key={props.id} className={classes.ticket}>
			<img src={props.image}></img>
			<h2>{props.name}  </h2>

			<h4>From : {props.from_where}</h4>

			<h4>To : {props.to_where}</h4>

			<h4>Ticket Price : {props.ticket_price}</h4>

			<h4>Day and Time : {props.day_and_time}</h4>

			<button id={classes.request} onClick={request}>
				Reqest
			</button>
		</li>
	);
};

export default Ticket;
