import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

import {Home} from '../home'
import {GettingStarted} from '../gettingstarted'
import {Demos} from '../demos'
import {Api} from '../api'

class AppRouter extends Component {
    navigateTo(loc){
        this.props.history.push(`/${loc}`)
    }
    render() {
        return (
           <mwc-container>
              <Router>
                <div style={{ marginTop : '75px'}}>
                    <Route exact path="/" component={Home}/>
                    <Route path="/gettingstarted" component={GettingStarted}/>
                    <Route path="/demos" component={Demos}/>
                    <Route path="/api" component={Api}/>
                </div>
            </Router>
          </mwc-container>
        );
    }
}

export default AppRouter;