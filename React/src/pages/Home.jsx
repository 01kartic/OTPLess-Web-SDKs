import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../index.css'

function Home() {
	const [token, setToken] = useState('');
	const [name, setName] = useState('');
	const [id, setId] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		const storedToken = localStorage.getItem('token');
		const storedName = localStorage.getItem('name');
		const storedId = localStorage.getItem('id');

		if (!storedToken || !storedId || !storedName) {
			navigate('../');
		} else {
			setToken(storedToken);
			setName(storedName);
			setId(storedId);
		}

	}, []);

	return (
		<div className='card Card text-start mx-3'>
			<ul class="list-group list-group-flush">
				<li class="list-group-item">
					<h4 className='mb-0 fw-bold'>{name}</h4>
					<p className='mb-0 fw-medium'>{id}</p>
				</li>
				<li class="list-group-item">
					also token is <span className='Token'>{token}</span>
				</li>
				<li class="list-group-item text-danger cursorPointer" onClick={Logout}>
					Logout
				</li>
			</ul>
		</div>
	);
}

function Logout() {
	localStorage.removeItem('token');
	localStorage.removeItem('name');
	localStorage.removeItem('id');
	window.location.reload();
}

export default Home;
