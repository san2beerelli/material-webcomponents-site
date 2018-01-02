import React, { Component } from 'react'
import {Header} from './header'
import {Navbar} from './navbar'
import {AppRouter} from './router'
import {Home} from './home'
import {GettingStarted} from './gettingstarted'
import {Demos, DemosPreview} from './demos'
import {Api, ApiPlayground} from './api'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

class App extends Component {

    constructor(){
        super();
        this.headerBtnClickHandler = this.headerBtnClickHandler.bind(this);
        this.drawerItemClickHandler = this.drawerItemClickHandler.bind(this);
        this.isPermanentNavBar = this.isPermanentNavBar.bind(this);
        this.state = {
            theme: {
                "primary" : "#263238",
                "primary-light": '#4f5b62',
                "primary-dark": '#000a12',
                "secondary": '#37474f',
                "secondary-light": '#62727b',
                "secondary-dark": '#102027',
                "background": '#BDBDBD'
            },
            navBarType: 'temporary'
        }
    }
    componentWillMount(){
        this.isPermanentNavBar()
    }
    isPermanentNavBar(){
        const moduleName = window.location.pathname.split('/')[1];
        if(moduleName.length ===0 || moduleName === 'gettingstarted'){
           // this.setState({navBarType:'temporary'})
        }else{
           // this.setState({navBarType:'permanent'})
        }
    }
    headerBtnClickHandler(evt){
        if(evt === 'menu'){
            this.navbar.open()
        }else if(evt === 'github'){
            var win = window.open('https://github.com/san2beerelli/material-webcomponents', '_blank');
            win.focus();
        }else{
           this.isPermanentNavBar()
        }
    }
    drawerItemClickHandler(evt){
     //
       console.log(evt)
    }

    render() {
        const {theme, navBarType} = this.state
        const themeRef = (themeref) => {
            if(themeref){
                themeref.theme = theme;
                themeref.icons = ['https://use.fontawesome.com/releases/v5.0.2/js/all.js']
            }
        };
        return (
                <mwc-theme ref={themeRef}>
                    <Router>
                        <mwc-container>
                        <Navbar onRef={(navbar) => { this.navbar = navbar; }} navBarType={navBarType} drawerItemClickHandler={this.drawerItemClickHandler}/>
                        <Header headerBtnClickHandler={this.headerBtnClickHandler}/>
                                <div style={{ marginTop : '75px', width: '100%'}}>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/gettingstarted" component={GettingStarted} />
                                    <Route exact path="/demos" component={Demos}/>
                                    <Route path="/demos/:component" component={DemosPreview} />
                                    <Route exact path="/api" component={Api}/>
                                    <Route path="/api/:component" component={ApiPlayground} />
                                </div>
                        </mwc-container>
                    </Router>
                </mwc-theme>

        );
    }
}

export default App;