const Checkbox = {
        component : `  () => (
        <div>
                <webmd-checkbox>
                </webmd-checkbox>
                <webmd-checkbox
                    checkcolor="000000"
                    label="Checkbox Label"
                    alignlabel="right"
                    checked="true">
                </webmd-checkbox>
        </div>
  )
                        `,
        markdown : `## Props
| Prop | Type | Default | Required | Description |
| ------ | ----------- | ------ | ------ | ------ |
| alignlabel | String | left | false | Alignment of Checkbox Label |
| checkcolor | String | ff00ff | false | Checkbox color in HEX |
| checked | Boolean | false | false | Checks the Checkbox |
| disabled | Boolean | false | false | Disable the Checkbox |
| indeterminate | Boolean | false | false | Indeterminate state for Checkbox |
| label | String | - | false | Label for the Checkbox |
| name | String | - | false | Name for Checkbox |
| ripple | Boolean | true | false | Ripple effect for Checkbox |
| value | String | - | false | Value for Checkbox |


## Events
| Slot | Prop dependencies | Description |
| ---- | ----------------- | ----------- |
| change | -              | Checkbox change event |
`
    }

export default Checkbox;