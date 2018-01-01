import React from 'react'


export const Button1 = {
    title : 'Flat Buttons',
    component : [
        <mwc-button key="flatbutton1">
            Default
        </mwc-button>,
        <mwc-button key="flatbutton2">
            Primary
        </mwc-button>,
        <mwc-button color="#b7884c" key="flatbutton3">
            Secondary
        </mwc-button>,
         <mwc-button disabled={true} key="flatbutton4">
            Disabled
        </mwc-button>,
         <mwc-button href="https://material-webcomponents.com" key="flatbutton5">
            Link
        </mwc-button>
    ]
}
export const Button2 = {
    title : 'Raised Buttons',
    component : [
        <mwc-button raised key="flatbutton1">
            Default
        </mwc-button>,
        <mwc-button raised color="#b7884c" key="flatbutton2">
            Primary
        </mwc-button>,
        <mwc-button raised backgroundcolor="#b7884c" color="#263238" key="flatbutton3">
            Secondary
        </mwc-button>,
         <mwc-button raised disabled={true} key="flatbutton4">
            Disabled
        </mwc-button>
    ]
}
export const Button3 = {
    title : 'Buttons with icons and label',
    component : [
        <mwc-button raised key="iconbutton1" icon="delete" backgroundcolor="#ce3d3d">
            Delete
        </mwc-button>,
        <mwc-button raised color="#b7884c" key="iconbutton2" icon="send">
            Send
        </mwc-button>,
        <mwc-button raised backgroundcolor="#b7884c" color="#263238" key="iconbutton3" icon="save">
            Save
        </mwc-button>,
         <mwc-button raised disabled={true} key="iconbutton4" icon="bookmark">
            Bookmark
        </mwc-button>
    ]
}
export const Button4 = {
    title : 'Stroked Buttons',
    component : [
        <mwc-button stroked key="strokebutton1">
            Default
        </mwc-button>,
        <mwc-button stroked color="#263238" key="strokebutton2">
            Primary
        </mwc-button>,
        <mwc-button stroked backgroundcolor="#b7884c" color="#263238" key="strokebutton3">
            Secondary
        </mwc-button>,
         <mwc-button stroked disabled={true} key="strokebutton4">
            Disabled
        </mwc-button>
    ]
}
export const Button5 = {
    title : 'Dense Buttons',
    component : [
        <mwc-button raised dense key="densebutton1">
            Default
        </mwc-button>,
        <mwc-button raised dense color="#b7884c" key="densebutton2">
            Primary
        </mwc-button>,
        <mwc-button raised dense backgroundcolor="#b7884c" color="#263238" key="densebutton3">
            Secondary
        </mwc-button>,
         <mwc-button raised dense disabled={true} key="densebutton4">
            Disabled
        </mwc-button>
    ]
}
export const Button6 = {
    title : 'Compact Buttons',
    component : [
        <mwc-button raised compact key="compactbutton1">
            Default
        </mwc-button>,
        <mwc-button raised compact color="#b7884c" key="compactbutton2">
            Primary
        </mwc-button>,
        <mwc-button raised compact backgroundcolor="#b7884c" color="#263238" key="compactbutton3">
            Secondary
        </mwc-button>,
         <mwc-button raised compact disabled={true} key="compactbutton4">
            Disabled
        </mwc-button>
    ]
}