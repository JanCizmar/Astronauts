"use strict";

import React from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';

import {ListPageView} from "./views/ListPageView";

export default class App extends React.Component {
    routes = [
        {component: ListPageView, path: '/'}
    ];

    componentDidMount() {
        document.title = 'Astronauts';
    }

    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        {this.routes.map((route, i) => (<Route key={i} {...route}/>))}
                    </Switch>
                </Router>
            </div>
        );
    }
}

