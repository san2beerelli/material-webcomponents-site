const Fab = {
    component : `() => (
        [
            <mwc-fab icon="edit" key="fab1">
            </mwc-fab>,
            <mwc-fab icon="edit" backgroundcolor="#b7884c" color="#263238" key="fab2">
            </mwc-fab>,
            <mwc-fab icon="edit" mini={true}
            backgroundcolor="#ff0000"
            color="#263238" key="fab3">
            </mwc-fab>
        ]
        )

    `,
     markdown : `## Props
| Prop | Type | Default | Required | Component | Description |
| ------ | ----------- | ------ | ------ | ------ | ------ |
| icon | String | - | false | Fab | Icon on Fab. Supports Material icons  |
| mini | Boolean | false | false | Fab | Mini icon fab   |
| backgroundcolor | String | - | false | Fab | Fab background color |
| color | String | - | false | Fab | Fab icon color |
| ripple | Boolean | - | false | Fab | Fab with ripple effect |
`
}

export default Fab;