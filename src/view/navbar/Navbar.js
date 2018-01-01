import React, { Component } from 'react';
import * as nav from './navigation'
import {withRouter} from "react-router-dom";
import PropTypes from 'prop-types';

class Navbar extends Component {
    constructor(props){
        super(props)
        this.menuClickHandler = this.menuClickHandler.bind(this);
        this.state = {}
    }
    open(){
        if(this.props.navBarType == "temporary"){
            console.log(this.mwcDrawer)
            this.mwcDrawer.open();
        }
    }
    close(){
        if(this.props.navBarType == "temporary"){
         this.mwcDrawer.close()
        }
    }
    menuClickHandler(evt){
        this.props.drawerItemClickHandler(evt)
         const moduleName = window.location.pathname.split('/')[1];
        if(moduleName.length ===0 || moduleName === 'gettingstarted'){
            window.location = `/demos/${evt.component}`;
        }else{
            this.props.history.push(`/${moduleName}/${evt.component}`);
        }
        if(this.props.navBarType == "temporary"){
            this.close();
        }
    }
     componentDidMount() {
        this.props.onRef(this)
    }
    componentWillUnmount() {
        this.props.onRef(undefined)
    }
    renderNavigationList(){
        return(
             <mwc-list>
                {
                        nav.navigation.type.map((node, i) => {
                    const label = node.title
                    return (
                        node.children.map((entry,k) => <mwc-list-item key={entry+k} onClick={()=>this.menuClickHandler(entry)}>
                        {entry.title}
                        </mwc-list-item>)
                    )})
                }
            </mwc-list>
        )
    }
    renderTemporaryDrawer(){
        return(
            <mwc-drawer type="temporary" header={false} ref={(mwcDrawer) => { this.mwcDrawer = mwcDrawer; }}>
                {
                    this.renderNavigationList()
                }
             </mwc-drawer>
        )
    }
    renderPermanentDrawer(){
        return(
            <mwc-drawer type="permanent" header={false}>
                {
                    this.renderNavigationList()
                }
             </mwc-drawer>
        )
    }
    render() {
        const {navBarType} = this.props;
       if(navBarType === "temporary"){
           return this.renderTemporaryDrawer();
       }
       return this.renderPermanentDrawer();
    }
}

Navbar.defaultProps = {
  navBarType: 'temporary' //permanent
};
Navbar.propTypes = {
  navBarType: PropTypes.string
};

export default withRouter(Navbar);