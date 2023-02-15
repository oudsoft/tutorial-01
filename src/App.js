import React from 'react'
import { hot } from 'react-hot-loader'
import logo from '../assets/images/doubleclick-600.png'
import './App.css'
const App = () => (
	<div>
		<h1>Webpack React Setup.</h1>
		<img src={logo} />	
		<h2>Welcome to DoubleClick</h2>
	</div>
)
export default hot(module)(App)
