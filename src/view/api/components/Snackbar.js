const Snackbar = {
    component : `
    class Snackbar extends React.Component {
        constructor() {
            super()
            this.onButtonClick = this.onButtonClick.bind(this);
        }
        onButtonClick(){
            this.mwcSnackbar.show()
        }
        renderSnackbar(){
            return(
            <mwc-snackbar ref={(mwcSnackbar) => { this.mwcSnackbar = mwcSnackbar; }}
            message="snackbar message"
            actiontext="Undo"
            timeout = {5000}
            actiononbutton="true">
            </mwc-snackbar>
         )
        }
        render() {
            return (
             <div>
                <mwc-button raised
                    color="#ffffff"
                    backgroundcolor="#323232"
                    onClick={this.onButtonClick} >
                    Open Snackbar
                </mwc-button>
                {this.renderSnackbar()}
             </div>
            )
        }
        }
    `,
     markdown : `## Props
| Prop | Type | Default | Required  | Description |
| ------ | ----------- | ------ | ------ | ------ |
| message | String | - | false |  message on the snackbar |
| timeout | Number | 1000 | false |  timeout for the snackbar |
| actiontext | String | - | false | Action button text |
| multiline | Boolean | - | false | supports multiline text|
| actiononbutton | Boolean | false | false |  display's the actionbutton |
| dismissesonaction | Boolean | true | false |  dissmiss the snackbar on action click |
| backgroundcolor | String | #000000 | false |  Snackbar background color in HEX |
| actioncolor | String | #ff0ff0 | false |  Snackbar action button color in HEX |
| messagecolor | String | #ffffff | false |  Snackbar message color in HEX |

## Events
| Event | Description |
| ------ | ------ |
| actionhandler  | dispatched when the action button is clicked |

## Methods
| Event | Description |
| ------ | ------ |
| show  | Show's the snackbar |
`
}

export default Snackbar;