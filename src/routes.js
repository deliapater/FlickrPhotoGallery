import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/App/App';
import Home from './components/App/Home';
import PhotoById from './components/Photo/PhotoById';


export default(
<Route path="/" component={Home}>
    <IndexRoute component = {App} />
    <Route path="/photo/:id" component = {PhotoById}/>
</Route>
);
