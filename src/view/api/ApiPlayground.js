import React, { Component } from 'react';
import Content from './Content'
import * as EditorComponents from './components'

class ApiPlayground extends Component {
     constructor(props){
      super(props)
      this.getComponentObj = this.getComponentObj.bind(this);
    }
    getComponentObj(){
        const compNameFromUrl = this.props.match.url.split('/')[2];
        const compName = compNameFromUrl.charAt(0).toUpperCase() + compNameFromUrl.slice(1);
        console.log(compName)
        return EditorComponents[compName]
    }
    render() {
        return (
            <Content componentObj={this.getComponentObj()}/>
        );
    }
}

export default ApiPlayground;