const Dialog = {
    component : `class Dialog extends React.Component {
        constructor() {
            super()
            this.onButtonClick = this.onButtonClick.bind(this)
        }
        renderDialog(){
            return(
             <mwc-dialog width="450px"
             ref={(dialog) => { this.dialogBox = dialog; }}>
                <mwc-dialog-header>
                Dialog Title
                </mwc-dialog-header>
                <mwc-dialog-body>
                Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                </mwc-dialog-body>
                <mwc-dialog-footer>
                <mwc-button type="accept">
                    Accept
                </mwc-button>
                <mwc-button type="cancel">
                    Cancel
                </mwc-button>
                </mwc-dialog-footer>
            </mwc-dialog>
         )
        }
        onButtonClick(){
            this.dialogBox.show()
        }
        render() {
            return (
             <div>
                <mwc-button raised
                    color="#ffffff"
                    backgroundcolor="#323232"
                    icon="bookmark"
                    onClick={this.onButtonClick} >
                    Open Dialog
                </mwc-button>
                {this.renderDialog()}
             </div>
            )
        }
        }
    `,
     markdown : `## Props
| Prop | Type | Default | Required | Component | Description |
| ------ | ----------- | ------ | ------ | ------ | ------ |
| width | String | - | false | Dialog | Dialog width |

## Footer button Props
| Prop | Type | Default | Required | Component | Description |
| ------ | ----------- | ------ | ------ | ------ | ------ |
| type | String | - | false | Dialog Footer | type='accept' will dispatch the accepted events from Dialog |
| type | String | - | false | Dialog Footer | type='cancel' will dispatch the canceled events from Dialog |

## Events
| Event | Description |
| ------ | ------ |
| accepted  | will be dispatched when the action type accept button is clicked |
| canceled  | will be dispatched when the action type cancel button is clicked |

## Methods
| Event | Description |
| ------ | ------ |
| show  | show the dialog |
| close  | close the dialog |

## Slots
| Slot | Prop dependencies | Component | Description |
| ---- | ----------------- | ----------- | ----------- |
| mwc-dialog-body | -              | Dialog Body| Renders any kind of content to the body |
| mwc-dialog-footer | -              | Dialog Footer| Expects mwc-buttons for actions |
| mwc-dialog-header | -              | Dialog Header| Dialog Header component with title. |
`
}

export default Dialog;