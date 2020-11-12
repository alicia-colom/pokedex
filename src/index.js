import React from 'react';
// import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './stylesheets/index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
