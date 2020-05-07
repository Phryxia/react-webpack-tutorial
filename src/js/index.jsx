import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/test';

const element = (
	<HelloWorld name="THIS" />
	);

ReactDOM.render(element, document.getElementById("root"));