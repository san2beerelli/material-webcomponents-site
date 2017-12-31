const Dialog = {
    component : `class Dialog extends React.Component {
        constructor() {
            super()
            this.onButtonClick = this.onButtonClick.bind(this)
        }
        renderDialog(){
            return(
             <webmd-dialog width="450px"
             ref={(dialog) => { this.dialogBox = dialog; }}>
                <webmd-dialog-header>
                Dialog Title
                </webmd-dialog-header>
                <webmd-dialog-body>
                Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                </webmd-dialog-body>
                <webmd-dialog-footer>
                <webmd-button type="accept">
                    Accept
                </webmd-button>
                <webmd-button type="cancel">
                    Cancel
                </webmd-button>
                </webmd-dialog-footer>
            </webmd-dialog>
         )
        }
        onButtonClick(){
            this.dialogBox.show()
        }
        render() {
            return (
             <div>
                <webmd-button raised
                    color="#ffffff"
                    backgroundcolor="#323232"
                    icon="bookmark"
                    onClick={this.onButtonClick} >
                    Open Dialog
                </webmd-button>
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
| webmd-dialog-body | -              | Dialog Body| Renders any kind of content to the body |
| webmd-dialog-footer | -              | Dialog Footer| Expects webmd-buttons for actions |
| webmd-dialog-header | -              | Dialog Header| Dialog Header component with title. |
`
}

export default Dialog;