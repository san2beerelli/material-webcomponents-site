import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

class Header extends Component {
    constructor(props){
        super(props)
        this.toolbarArr = [{label:'Home',evt:''},
                             {label:'Getting Started',evt:'gettingstarted'},
                             {label:'Demos',evt:'demos'},
                             {label:'API',evt:'api'}]
        this.menuClickHandler = this.menuClickHandler.bind(this)
        this.state = {
            activeindex: 0
        }
    }
    componentWillMount(){
        const page = window.location.pathname.split('/')[1];
        let pageName = "";
        if(page.length === 0){
            pageName = 'home'
        }else{
            pageName = page;
        }
        let tabIndex;
        this.toolbarArr.map((item,indx) => {
            if(item.evt === pageName){
                tabIndex = indx;
            }
        })
        this.setState({activeindex:tabIndex})
    }
    menuClickHandler(evt){
        let btnStr = '';
        if(typeof(evt) === 'string'){
            btnStr = evt
        }else{
           btnStr = this.toolbarArr[evt.detail.activeTabIndex].evt
        }
        this.props.headerBtnClickHandler(btnStr)
        this.props.history.push(`/${btnStr}`);
    }
    render() {
        const {activeindex} = this.state;
        const toolBarRef = (toolbar) => {
            if(toolbar){
                toolbar.tabs = this.toolbarArr
                toolbar.addEventListener('change',this.menuClickHandler)
                toolbar.activeindex = activeindex;
            }
        }
        return (
             <mwc-toolbar type="flexible">
                <mwc-container width="100%" justifycontent="space-between">
                    <mwc-container>
                        <mwc-toolbar-icon onClick={()=>this.menuClickHandler('menu')}>
                                    menu
                        </mwc-toolbar-icon>
                        <mwc-toolbar-title style={{cursor: 'pointer'}} onClick={()=>this.menuClickHandler('logo')} >
                            <mwc-typography type="title" display="inherit">
                                material-webcomponents
                            </mwc-typography>
                        </mwc-toolbar-title>
                    </mwc-container>
                    <mwc-container>
                        <mwc-tabbar style={{ marginTop: '13px', marginRight: '20px' }}
                                    ref={toolBarRef}>
                        </mwc-tabbar>
                        <mwc-toolbar-icon onClick={()=>this.menuClickHandler('github')}>
                            <i className="fab fa-github"></i>
                        </mwc-toolbar-icon>
                    </mwc-container>
                </mwc-container>
          </mwc-toolbar>
        );
    }
}

export default withRouter(Header);