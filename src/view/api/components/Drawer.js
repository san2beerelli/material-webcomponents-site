const Drawer = {
    component : `class Drawer extends React.Component {
        constructor() {
            super()
            this.onButtonClick = this.onButtonClick.bind(this);
            this.onNavigationClick = this.onNavigationClick.bind(this)
        }
        renderDrawer(){
            const buttons = ['button1','button2','button3']
            return(
               <mwc-drawer type="temporary" header={true} ref={(mwcDrawer) => { this.mwcDrawer = mwcDrawer; }}>
               <mwc-container slot="header" justifycontent="center" alignitems="center"
               width="100%"
               height="100%"
               backgroundcolor="#323232">
                <mwc-typography type="title" color="#ffffff">
                    Header
                </mwc-typography>
               </mwc-container>
               <mwc-list>
               {
                   buttons.map((button,i) => {
                       return(
                        <mwc-list-item key={i} onClick={()=> this.onNavigationClick()}>
                        {button}
                        </mwc-list-item>
                       )
                   })
               }
               </mwc-list>
             </mwc-drawer>
         )
        }
        onNavigationClick(){
            this.mwcDrawer.close()
        }
        onButtonClick(){
            this.mwcDrawer.open();
        }
        render() {
            return (
             <div>
                <mwc-button raised
                    color="#ffffff"
                    backgroundcolor="#323232"
                    icon="menu"
                    onClick={this.onButtonClick} >
                    Open Drawer
                </mwc-button>
                {this.renderDrawer()}
             </div>
            )
        }
        }
    `,
     markdown : `## Props
| Prop | Type | Default | Required | Component | Description |
| ------ | ----------- | ------ | ------ | ------ | ------ |
| type | String | persistent | false | Drawer | Drawer types are persistent,permanent,temporary  |
| toolbarspacer | Boolean | true | false | Drawer | Displays the tool bar spacer  |
| header | Boolean | true | false | Drawer | Displays the tool bar header |

## Events
| Event | Description |
| ------ | ------ |
| ondraweropen  | will be dispatched when the Drawer is opened|
| ondrawerclose  | will be dispatched when the Drawer is closed |

## Methods
| Event | Description |
| ------ | ------ |
| open  | opens the Drawer |
| close  | close the Drawer |

## Slots
| Slot Name | Prop dependencies | Component | Description |
| ---- | ----------------- | ----------- | ----------- |
| header | -              | - | Renders any kind of content to the header. Component should have slot="header" |
| toolbarspacer | -              | - | Renders any kind of content to the toolbar spacer. Component should have slot="toolbarspacer" |
`
}

export default Drawer;