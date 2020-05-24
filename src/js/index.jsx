import React from 'react';
import ReactDOM from 'react-dom';

/*
	<input>, <select> 등의 태그들은 자체적으로
	상태를 가지고 있는데, 이를 동일한 방식의 리액트적인
	상태관리로 처리할 수 있다는 점을 유의하자.

	유일하게 신뢰할 수 있는 출처로서 리액트 컴포넌트의
	상태(state)를 사용한다.
*/
class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isGoing: true,
			numberOfGuests: 2
		};

		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.name === 'isGoing' ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});
	}

	render() {
		return (
		  <form>
		    <fieldset>
		    <legend>Reservation</legend>
		  	<label>
		  	  Is Going:
		  	  <input
		  	    name='isGoing'
		  	    type='checkbox'
		  	    checked={this.state.isGoing}
		  	    onChange={this.handleInputChange} />
		  	</label>
		  	<br />
		  	<label>
		  	  Number of guests:
		  	  <input
		  	  	name='numberOfGuests'
		  	  	type='number'
		  	  	value={this.state.numberOfGuests}
		  	  	onChange={this.handleInputChange} />
		  	</label>
		  	</fieldset>
		  </form>);
	}
}

const element = (<NameForm />);

ReactDOM.render(element, document.getElementById("root"));