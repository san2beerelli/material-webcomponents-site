const Menu = {
    component : `
         class Menu extends React.Component {
        constructor() {
            super()
            this.onButtonClick = this.onButtonClick.bind(this);
        }
        renderMenu(){
            const buttons = ['Menu1','Menu2','Menu3']
            return(
               <mwc-menu ref={(mwcMenu) => { this.mwcMenu = mwcMenu; }}>
                {
                   buttons.map((button,i) => {
                       return(
                        <mwc-menu-item key={i}>
                        {button}
                        </mwc-menu-item>
                       )
                   })
               }
               </mwc-menu>
               )
        }
        onButtonClick(){
            this.mwcMenu.show();
        }
        render() {
            return (
             <div>
                <mwc-button raised
                    color="#ffffff"
                    backgroundcolor="#323232"
                    icon="menu"
                    onClick={this.onButtonClick} >
                </mwc-button>
                {this.renderMenu()}
             </div>
            )
        }
        }
    `,
     markdown : `## Props
| Prop | Type | Default | Required | Component | Description |
| ------ | ----------- | ------ | ------ | ------ | ------ |
| open | Boolean | false | false |  | open the Menu|
| disabled | Boolean | false | false | Menu Item | Disables the Menu Item|

## Events
| Event | Description |
| ------ | ------ |
| selected  | will be dispatched when the Menu item is selected|

## Methods
| Event | Description |
| ------ | ------ |
| show  | shows the Menu |
| hide  | hides the Menu |

## Slots
| Slot | Prop dependencies | Component | Description |
| ---- | ----------------- | ----------- | ----------- |
| mwc-menu-item | -              | Menu Item| Menu Item |

`
}

export default Menu;