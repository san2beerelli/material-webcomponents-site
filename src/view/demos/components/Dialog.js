import React from 'react'

let dialogBox;

 function renderDialog(){
            return(
             <mwc-dialog width="450px"
             ref={(dialog) => { dialogBox = dialog; }}>
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

export const Dialog1 = {
    title : 'Simple Dialog',
    component : [
        <div  key="simpledialog">
            <mwc-button raised onClick={() => {dialogBox.show()}}>
                Open Dialog
            </mwc-button>
            {renderDialog()}
        </div>
    ]
}
