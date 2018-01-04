const Radio = {
    component : `() => (
        [
    <mwc-radio name="radios" key="radio1" radiocolor="#ff0000" checked={true}></mwc-radio>,
    <mwc-radio name="radios" key="radio2" radiocolor="#000000"></mwc-radio>,
    <mwc-radio name="radios" key="radio3" radiocolor="#00ff00"></mwc-radio>,
    <mwc-radio name="radios" key="radio4" radiocolor="#0000ff"></mwc-radio>
        ]

        )
    `,
     markdown : `## Props
| Prop | Type | Default | Required  | Description |
| ------ | ----------- | ------ | ------ | ------ |
| checked | Boolean | false | false | checks if it is true , uncheck when it is false|
| ripple | Boolean | true | false | Adds ripple effect |
| radiocolor | String | - | false |  Radio color in HEX |
| name | String | - | false |  name of the Radio |

## Methods
| Event | Description |
| ------ | ------ |
| progress  | sets the progress value |
| buffer  | sets the buffer value |

`
}

export default Radio;