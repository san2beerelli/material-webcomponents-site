import React, { Component } from 'react';
import {withRouter} from "react-router-dom";
import logoImg from '../../resources/logo.png'
import style from 'styled-components'

const GradientDiv = style.div`
  background: -webkit-linear-gradient(0deg, #b7884c, #d8bb79, #fcf2a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
`
const LogoDiv = style.div`
   display: flex;
   flex-direction : row;
   align-items : center;
`

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
        let tabIndex;
        this.toolbarArr.map((item,indx) => {
            if(item.evt === page){
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
        if(btnStr !== 'menu'){
            this.props.history.push(`/${btnStr}`);
        }
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
                        <mwc-toolbar-title style={{cursor: 'pointer'}} onClick={()=>{window.location = "/"}} >
                            <mwc-typography type="title" display="inherit">
                                <LogoDiv>
                                    <img src={logoImg} width="28px" height="28px" style={{marginRight: '10px'}}/>
                                    <GradientDiv>
                                        material-webcomponents
                                    </GradientDiv>
                                </LogoDiv>
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