import React, { Component } from 'react';
import Content from './Content'
/* import * as EditorComponents from './components' */

class DemosPreview extends Component {
     constructor(props){
      super(props)
      this.getComponentName = this.getComponentName.bind(this);
    }
    getComponentName(){
        const compNameFromUrl = this.props.match.url.split('/')[2];
         return compNameFromUrl.charAt(0).toUpperCase() + compNameFromUrl.slice(1);
    }
    render() {
        const compName = this.getComponentName()
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
}

export default DemosPreview;