import React, { Component } from 'react';
import logoImg from '../../resources/logo.png'
import style from 'styled-components'

const GradientDiv = style.div`
  background: -webkit-linear-gradient(0deg, #b7884c, #d8bb79, #fcf2a8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: flex;
  font-size : 50px;
  margin-top : 30px;
`

class Home extends Component {
    render() {
        return (
             <mwc-container width="100%" height="100%" justifycontent="center" alignitems="center" flexdirection="column">
                 <img src={logoImg} style={{marginTop: '50px'}} width="240px"/>
                 <GradientDiv>
                     material-webcomponents
                 </GradientDiv>
                  <div style={{marginTop: '20px'}}>
                    Web Components that implements Google's Material Design and supports most of the popular frameworks
                 </div>
            </mwc-container>
        );
    }
}

export default Home;