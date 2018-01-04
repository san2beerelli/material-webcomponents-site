const Icontoggle = {
        component : `  () => ([<mwc-icon-toggle key="toggle1"
                      onicon="favorite"
                      officon="favorite_border">
                 </mwc-icon-toggle>,
                 <mwc-icon-toggle key="toggle2"
                      toggleon={true}
                      onicon="favorite"
                      officon="favorite_border"
                      color="#b7884c"
                      >
                 </mwc-icon-toggle>
                ]
  )
                        `,
        markdown : `## Props
| Prop | Type | Default | Required | Description |
| ------ | ----------- | ------ | ------ | ------ |
| onicon | String | - | true | Material on icon |
| officon | String | - | true | Material off icon |
| color | String | - | false | Icon Color |
| disabled | Boolean | false | false | Disable the Toggle icon |
| toggleon | Boolean | false | false | Default Toggle State |
| label | String | - | false | Label for the Checkbox |
| ripple | Boolean | true | false | Ripple effect for Checkbox |


## Events
| Slot | Prop dependencies | Description |
| ---- | ----------------- | ----------- |
| oniconchange | -              | Fires the event when icon toggle |
`
    }

export default Icontoggle;