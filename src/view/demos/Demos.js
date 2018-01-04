import React, { Component } from 'react';
import Content from './Content'
import * as queryString from 'query-string'
import ReactMarkdown from 'react-markdown'

const DemoMarkdown = `## Demo

`

class Demos extends Component {
    constructor(props){
      super(props)
      this.getComponentName = this.getComponentName.bind(this);
    }
     getComponentName(){
        const compNameFromUrl = queryString.parse(location.search).type;
        if(compNameFromUrl){
            return compNameFromUrl.charAt(0).toUpperCase() + compNameFromUrl.slice(1);;
        }
        return null;
    }
    render() {
         const compName = this.getComponentName()
         if(compName){
            return (
                <mwc-container width="100%" alignitems="center" flexdirection="column">
                    <div style={{width:'50%', marginTop: '20px', marginBottom: '-20px'}}>
                        <mwc-typography type="display1">
                            {compName}
                        </mwc-typography>
                    </div>
                <Content demoComponent={compName} />
                </mwc-container>
            );
         }
         return <ReactMarkdown source={DemoMarkdown} />
    }
}

export default Demos;