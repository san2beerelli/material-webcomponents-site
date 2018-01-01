import React, { Component } from 'react';
import Content from './Content'
import style from 'styled-components'

const DemoWrapper = style.div`
   width : 100%;
   display : flex;
   flex-direction : column;
   align-items : center;
`

class Demos extends Component {
    render() {
        return (
            <mwc-container width="100%" alignitems="center" flexdirection="column">
                <div style={{width:'50%', marginTop: '20px', marginBottom: '-20px'}}>
                    <mwc-typography type="display1">
                        Butons
                    </mwc-typography>
                </div>
               <Content demoComponent="Button" />
            </mwc-container>
        );
    }
}

export default Demos;