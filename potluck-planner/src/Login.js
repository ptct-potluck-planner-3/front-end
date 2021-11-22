import React,{useState} from 'react'

const Login = () => {
	const [form, setForm] = useState({
		name: '',
		password: '',
	});

	const handleChange = (e) => {
		setForm({
			[e.target.name]: e.target.value
		});
	}

	const handlesubmit = (e) => {
		e.preventDefault()
		
	}
	return (
		<div>
			Log in
			<form>
				
				<label htmlFor="name">
					<input
						name="name"
						value={form.name}
						placeholder="enter your name" 
						onChange={handleChange} />
				</label>
				<label htmlFor="password">
					<input
						name="password"
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