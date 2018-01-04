const Slider = {
    component : `() => (
        [
    <mwc-slider key="slider1" ></mwc-slider>,
    <mwc-slider key="slider2" slidercolor="#ff0000"></mwc-slider>
    ])
    `,
     markdown : `## Props
| Prop | Type | Default | Required  | Description |
| ------ | ----------- | ------ | ------ | ------ |
| value | Number | 50 | false |  value of the slider |
| min | Number | 0 | false |  min value of the slider |
| max | Number | 100 | false | max value of the slider |
| step | Number | 0 | false | step value of the slider |
| disabled | Boolean | false | false |  disabled the slider |
| discrete | Boolean | false | false |  discrete slider |
| slidercolor | String | #000000 | false |  Slider color in HEX |

## Events
| Event | Description |
| ------ | ------ |
| change  | dispatched when the slider changed |
| inputchange  | dispatched when the slider inputchanged |


## Methods
| Event | Description |
| ------ | ------ |
| stepup  | stepup the value |
| stepdown  | stepdown the value |

`
}

export default Slider;