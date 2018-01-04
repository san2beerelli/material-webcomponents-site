const Gridlist = {
    component : `() => (
        <mwc-grid-list tilewidth="200px">
            <mwc-grid-list-tile>
                 <img slot="tile-content" width="200px" height="200px" src="https://placeimg.com/200/200/any" />
                 <div slot="tile-title"> Image 1 </div>
            </mwc-grid-list-tile>
            <mwc-grid-list-tile>
                 <img slot="tile-content" width="200px" height="200px" src="https://placeimg.com/200/200/any" />
                 <div slot="tile-title"> Image 2 </div>
            </mwc-grid-list-tile>
        </mwc-grid-list>
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

export default Gridlist;