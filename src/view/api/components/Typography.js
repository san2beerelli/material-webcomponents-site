const Typography = {
    component : `
    () => (
         <mwc-container width="100%"
         height="100%" flexdirection="column"
         justifycontent="center" alignitems="center" >
            <mwc-typography type="display4">
                display4
            </mwc-typography>
            <mwc-typography type="display3" color="#b7884c">
                display3
            </mwc-typography>
            <mwc-typography type="display2">
                display2
            </mwc-typography>
            <mwc-typography type="display1">
                display1
            </mwc-typography>
            <mwc-typography type="headline">
                headline
            </mwc-typography>
            <mwc-typography type="title" color="#ff00ff">
                title
            </mwc-typography>
         </mwc-container>
  )
    `,
     markdown : `## Props
| Prop | Type | Default | Required | Description |
| ------ | ----------- | ------ | ------ | ------ |
| type | String | display1 | false | Typography supports display4, display3, display2, display1, headline, title, subheading2, subheading1, body2, body1, caption, button |
| color | String | - | false | Typography color in HEX |
| display | String | block | false | display types are block / inherit |

`
}

export default Typography;