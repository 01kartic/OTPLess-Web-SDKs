import './App.css'
import Login from './pages/Login'
import Home from './pages/Home'

import { Route, Routes } from 'react-router'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/Home' element={<Home />} />
		</Routes>
	)
}

export default App
