import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import NotFound from '../elements/NotFound/NotFound';

const App = () => {
    return (
        <BrowserRouter>
            <React.Fragment>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route component={NotFound} />
                </Switch>
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App;
