import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	render() {
		let txt1 = this.props.txt1
		let txt2 = this.props.txt2
		return (
			<div>
				<h1>{ txt2 }</h1>
				<h1>{ txt1 }</h1>
				<h1>{ this.props.cat }</h1>
			</div>
		)
	}
}

App.propTypes = {
	txt1: React.PropTypes.string,
	txt2: React.PropTypes.string,
	cat: React.PropTypes.number.isRequired	// 없으면 에러.
}

App.defaultProps = {
	txt2: 'this is a default text'	// text가 없으면 default로 들어감.
}

ReactDOM.render(
	<App cat={5} txt1="this is a props text" />,	// 그냥 숫자로 쓰면 에러.
	document.getElementById('app')
)


