import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "./components/home/App";
import Contact from "./components/page/Contact";

// eslint-disable-next-line
const AppRouter = () => {
        return (
            <Router>
                <div>
                    <Route path="/" exact component={App} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        )
    }
    


export default AppRouter;

