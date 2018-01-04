import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown'
import * as EditorComponents from './components'
import * as queryString from 'query-string'
import Content from './Content'


const ApiMarkdown = `## Api

`

class Api extends Component {
     constructor(props){
      super(props)
      this.getComponentObj = this.getComponentObj.bind(this);
    }
     getComponentObj(){
        const compNameFromUrl = queryString.parse(location.search).type;
        if(compNameFromUrl){
            const compName = compNameFromUrl.charAt(0).toUpperCase() + compNameFromUrl.slice(1);
            return EditorComponents[compName]
        }
        return null;
    }
    render() {
        const compObj = this.getComponentObj();
        if(compObj){
          return <Content componentObj={compObj}/>
        }
        return <ReactMarkdown source={ApiMarkdown} />
    }
}

export default Api;