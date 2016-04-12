import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		return <Button>I <Heart /> React</Button>
	}
}

class Button extends React.Component {
	render() {
		return (
			<div>
				<h1>{this.props.children}</h1>
				<button>{this.props.children}</button>
			</div>
		)
	}
}

const Heart = () => (
	<span className="glyphicon glyphicon-heart">heart</span>
)

export default App
