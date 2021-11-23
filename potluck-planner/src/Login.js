import React, { useState, } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
	const [form, setForm] = useState({
		username: '',
		password: '',
	});

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]:e.target.value 
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		axios
			.post('https://potluck-planner-3-back-end.herokuapp.com/api/users/login', form)
			.then(res => { console.log(res) })
		.catch(err =>{console.log(err)})
	}
	return (
		<div>
			Log in
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">
					<input
						name="username"
						value={form.username}
						placeholder="enter your name" 
						onChange={handleChange} />
				</label>
				<label htmlFor="password">
					<input
						name="password"
						type="password"
						value={form.password}
						placeholder="******" 
						onChange={handleChange} />
				</label>
				<button type="submit">Log in</button>
			</form>
		</div>
	)
}

export default Login