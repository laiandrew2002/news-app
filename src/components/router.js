import React from 'react';
import { Switch, Route } from 'react-router-dom';
import News from './News.js';
import Tech from './Tech.js';
import Business from './Business.js';
import Sport from './Sport.js';
import Entertainment from './Entertainment'


const Main = () => (
    <Switch>
        <Route exact path="/" component={News} />
        <Route path="/Tech" component={Tech} />
        <Route path="/Business" component={Business} />
        <Route path="/Sport" component={Sport} />
        <Route path="/Entertainment" component={Entertainment} />
    </Switch>
)

export default Main;