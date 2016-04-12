import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super()
		this.update = this.update.bind(this)
		this.state = {increasing: false}
	}
	update() {
		ReactDOM.render(
			<App val={this.props.val+1} />,
			document.getElementById('app')
		)
	}
	// 최초엔 호출 x. 컴포넌트 갱신되기 전 호출
	componentWillReceiveProps(nextProps) {
		this.setState({increasing: nextProps.val
			> this.props.val})
	}
	// true/false를 리턴해야 함.
	// render 전에 호출 되며, false이면
	// render를 하지 않음.
	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.val % 5 === 0;
	}
	render() {
		console.log(this.state.increasing)
		return (
			<button onClick={this.update}>
				{this.props.val}
			</button>
		)
	}
	// 최초엔 호출 x. 컴포넌트 갱신 후 호출
	componentDidUpdate(prevProps, prevState) {
		console.log('prevProps', prevProps);
	}
}

App.defaultProps = { val: 0 }

export default App
