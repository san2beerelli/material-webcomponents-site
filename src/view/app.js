import React, { Component } from 'react'
import {Header} from './header'
import {Navbar} from './navbar'
import {AppRouter} from './router'
import {Home} from './home'
import {GettingStarted} from './gettingstarted'
import {Demos} from './demos'
import {Api} from './api'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {

    constructor(){
        super();
        this.headerBtnClickHandler = this.headerBtnClickHandler.bind(this);
        this.drawerItemClickHandler = this.drawerItemClickHandler.bind(this);
        this.state = {
            theme: {
                "primary" : "#263238",
                "primary-light": '#4f5b62',
                "primary-dark": '#000a12',
                "secondary": '#37474f',
                "secondary-light": '#62727b',
                "secondary-dark": '#102027',
                "background": '#BDBDBD'
            }
        }
    }
    headerBtnClickHandler(evt){
        if(evt === 'menu'){
            this.refs.navbar.open()
        }else if(evt === 'github'){
            var win = window.open('https://github.com/san2beerelli/material-webcomponents', '_blank');
            win.focus();
        }else{
           if(evt === 'logo'){
               evt = ""
           }
          // document.location = `/${evt}`
        }
    }
    drawerItemClickHandler(evt){
     //
       console.log(evt)
    }

    render() {
        const {theme,redirect,rediretTo} = this.state
        const themeRef = (themeref) => {
            if(themeref){
                themeref.theme = theme;
                themeref.icons = ['https://use.fontawesome.com/releases/v5.0.2/js/all.js']
            }
        };
        if(redirect){
            return <Redirect to={`/${rediretTo}`} push={true} />
        }
        return (

                <mwc-theme ref={themeRef}>
                    <Router>
                        <mwc-container>
                        <Navbar ref="navbar" drawerItemClickHandler={this.drawerItemClickHandler}/>
                        <Header headerBtnClickHandler={this.headerBtnClickHandler}/>
                                <div style={{ marginTop : '75px'}}>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/gettingstarted" component={GettingStarted}/>
                                    <Route path="/demos" component={Demos}/>
                                    <Route path="/api" component={Api}/>
                                </div>
                        </mwc-container>
                    </Router>
                </mwc-theme>

        );
    }
}

export default App;