import React, { Component } from 'react';
import Content from './Content'
import * as EditorComponents from './components'

class Api extends Component {
     constructor(){
      super()
      this.state = {
        componentObj : EditorComponents['Button']
      }
    }
    render() {
        return (
            <Content componentObj={this.state.componentObj}/>
        );
    }
}

export default Api;