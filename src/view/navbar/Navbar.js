import React, { Component } from 'react';
import * as nav from './navigation'

class Navbar extends Component {
    constructor(props){
        super(props)
        this.menuClickHandler = this.menuClickHandler.bind(this);
    }
    open(){
        this.mwcDrawer.open();
    }
    close(){
        this.mwcDrawer.close()
    }
    menuClickHandler(evt){
        this.props.drawerItemClickHandler(evt)
        this.close();
    }
    render() {
        return (
              <mwc-drawer type="temporary" header={false} ref={(mwcDrawer) => { this.mwcDrawer = mwcDrawer; }}>
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
             </mwc-drawer>
        );
    }
}

export default Navbar;