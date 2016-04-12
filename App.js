import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			red: 0,
			green: 0,
			blue: 0
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({	// 3. 그러면 findDOMNode에서 red라는 레퍼런스 속의 inp 레퍼런스까지 접근해야 한다.
			red: ReactDOM.findDOMNode(this.refs.red.refs.inp).value,
			green: ReactDOM.findDOMNode(this.refs.green.refs.inp).value,
			blue: ReactDOM.findDOMNode(this.refs.blue.refs.inp).value
		})
	}
	render() {
		return (
			<div>
				<Slider ref="red" update={this.update} />
				{this.state.red}	
				<br />
				<Slider ref="green" update={this.update} />
				{this.state.green}
				<br />
				<Slider ref="blue" update={this.update} />
				{this.state.blue}
				<br />
			</div>
		)	// 2. 여기서 출력이 안된다.
	}
}

class Slider extends React.Component {
	render() {
		return (
			<div>	
				<input type="range" ref="inp" min="0" max="255" onChange={this.props.update} />
			</div>
		)	// 1. input만 있을때는 Slider로 바로 접근이 되었지만, div로 감싸면 바로 접근이 안되기 때문에 input을 div로 감싸면
	}		// 4. 말 그대로 여기를 div로 감싸지만 않으면 inp를 따로 정할 필요가 없음.
}

export default App
