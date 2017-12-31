const Button = {
        component : `  () => (
        [<mwc-button raised key={1}>
                Raised Button
        </mwc-button>,
        <mwc-button stroked key={2} >
                Stroked Button
        </mwc-button>,
        <mwc-button icon="book" key={3} >
                Icon Button
        </mwc-button>]
        )
                        `,
        markdown : `## Props
| Prop | Type | Default | Required | Description |
| ------ | ----------- | ------ | ------ | ------ |
| icon | String | - | false | icon button |
| raised | Boolean | false | false | raised button |
| unelevated | Boolean | false | false | unelevated button |
| stroked | Boolean | false | false | stroked button |
| dense | Boolean | false | false | dense button |
| compact | Boolean | false | false | compact button |
| ripple | Boolean | true | false | button with ripple effect |
| href | String | - | false | link button |
| color | String | #ffffff | false | text color |
| backgroundcolor | String | #3f51b5 | false | button color |

## Slots
| Slot | Prop dependencies | Description |
| ---- | ----------------- | ----------- |
| default | -              | button label |
`
    }

export default Button;