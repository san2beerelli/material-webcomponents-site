const List = {
        component : `  () => ([
                <mwc-list key="list1">
                <mwc-list-item>
                Item 1
                </mwc-list-item>
                <mwc-list-item>
                Item 2
                </mwc-list-item>
                <mwc-list-item>
                Item 3
                </mwc-list-item>
                 </mwc-list>
                ]
  )
                        `,
        markdown : `## Props
| Prop | Type | Default | Required | Component |Description |
| ------ | ----------- | ------ | ------ | ------ | ------ |
| borderlist | Boolean | true | false | List |Includes the border to the list and items |
| dense | Boolean | - | false | List |Dense list |
| ripple | Boolean | - | false | ListItem | Ripple effect on List item |
| interactive | Boolean | - | false | ListItem | Interactive List item |


## Slots
| Slot | Prop dependencies | Component | Description |
| ---- | ----------------- | ----------- | ----------- |
| mwc-list-item | -              | ListItem | List Item |
`
    }

export default List;