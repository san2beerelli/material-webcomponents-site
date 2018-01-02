import React from 'react'

export const Checkbox1 = {
    title : 'Checkbox',
    component : [
        <mwc-checkbox key="Checkbox1">
        </mwc-checkbox>,
        <mwc-checkbox key="Checkbox2"
                     checkcolor="b7884c"
                     checked>
        </mwc-checkbox>,
        <mwc-checkbox key="Checkbox3" checked disabled>
        </mwc-checkbox>,
        <mwc-checkbox key="Checkbox4" indeterminate={true}>
        </mwc-checkbox>
    ]
}
export const Checkbox2 = {
    title : 'Checkbox With Label',
    component : [
        <mwc-checkbox key="checkboxwithlabel1" label="Primary" >
        </mwc-checkbox>,
        <mwc-checkbox key="checkboxwithlabel2"
                     checkcolor="b7884c" label="Secondary"
                     checked>
        </mwc-checkbox>,
        <mwc-checkbox key="checkboxwithlabel3"
        checked disabled alignlabel="right"
        label="Disabled"
        >
        </mwc-checkbox>,
        <mwc-checkbox key="checkboxwithlabel4"
        alignlabel="right"
        indeterminate={true}
        label = "Indeterminate"
        >
        </mwc-checkbox>
    ]
}