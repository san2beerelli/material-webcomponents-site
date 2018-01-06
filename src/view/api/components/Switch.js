const Switch = {
    component : `() => (
        <mwc-container width="100%" height="100%" justifycontent="space-around" alignitems="center" >
           <mwc-switch label="" checked={true}>
           </mwc-switch>
           <mwc-switch label="" switchcolor="#b7884c" checked={true}>
           </mwc-switch>
           <mwc-switch label="on/off">
           </mwc-switch>
       </mwc-container>
  )
    `,
     markdown : `## Props
| Prop | Type | Default | Required  | Description |
| ------ | ----------- | ------ | ------ | ------ |
| checked | Boolean | false | false | check / uncheck the Switch|
| disabled | Boolean | false | false |  disable's the Switch |
| switchcolor | String | #000000 | false |  Switch color in HEX |
| label | String | - | false |  label for the Switch |
| labelposition | String | right | false | left / right label position for Switch |
`
}

export default Switch;