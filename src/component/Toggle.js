import React, { Component } from 'react';

class Toggle extends Component {
	constructor(props) {
		super(props);
		this.state = { textDisplay: false };
	}
	ToggleButton() {
		this.setState((currentState) => ({
			textDisplay: !currentState.textDisplay,
		}));
	}
	render() {
		return (
			<div>
				<button onClick={() => this.ToggleButton()}>Show/Hide</button>
				{!this.state.textDisplay && this.props.text}
			</div>
		);
	}
}

export default Toggle;
