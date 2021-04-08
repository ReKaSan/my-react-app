import React from 'react';
import './App.css';
import Accordion from './component/Acordion';
import list from './component/list';
import Toggle from './component/Toggle';

function App() {
	return (
		<div className="app">
			<div className="main">
				<imput className="btn-play" type="image" />
				<h2>STATIONS</h2>
				<imput className="btn-off" type="image" />
			</div>
			<div className="list">
				{list.map((list) => (
					<Accordion {...list} />
				))}
			</div>
			<div className="main-bottom">
				<h3>
					<Toggle text="curently playing:" />
				</h3>
			</div>
		</div>
	);
}

export default App;
