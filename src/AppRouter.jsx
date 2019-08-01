import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import Registration from './Registration';
import Login from './Login';
import './main.css';

const AppRouter = () => {
    return (
        <Container className={'mainContainer'}>
            <Router>
                <Route path="/register" exact component={Registration} />
                <Route path="/login/" component={Login} />
            </Router>
        </Container>
    );
}

export default AppRouter;