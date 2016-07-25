'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

const html = document.getElementsByTagName("html")[0];
html && html.classList.remove('page-loading');

ReactDOM.render(<App />, document.getElementById('app'));
