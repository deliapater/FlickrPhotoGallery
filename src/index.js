import React from 'react';
import ReactDOM from 'react-dom';

import '../node_modules/bulma/css/bulma.min.css';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

import routes from './routes';
import { Router, browserHistory } from 'react-router';

ReactDOM.render(<Router history={browserHistory} routes = {routes} />, document.getElementById('root'));

registerServiceWorker();
