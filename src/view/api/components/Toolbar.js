const Toolbar = {
    component : `
    () => (
       <mwc-toolbar>
            <mwc-toolbar-section align="start">
                <mwc-toolbar-icon>
                    menu
                </mwc-toolbar-icon>
                <mwc-toolbar-title>
                <mwc-typography type="title" display="inherit">
                    Title
                </mwc-typography>
                </mwc-toolbar-title>
            </mwc-toolbar-section>
            <mwc-toolbar-section align="end">

            </mwc-toolbar-section>
        </mwc-toolbar>
  )
    `,
     markdown : `## Props
| Prop | Type | Default | Required  | Component | Description |
| ------ | ----------- | ------ | ------ | ------ | ------ |
| type | String | fixed | false | - | Toolbar supports fixed, waterfall, flexible, fixed-lastrow-only |
| align | String | center | false | Toolbar Section | Toolbar section will aligned to start / end |

## Slots
| Slot | Prop dependencies | Component | Description |
| ---- | ----------------- | ----------- | ----------- |
| mwc-toolbar-title | -              | Toolbar Title| Toolbar Title |
| mwc-toolbar-section | -              | Toolbar Section| Toolbar Section |
| mwc-toolbar-icon | -              | Toolbar Icon| Material icons for toolbar |


`
}

export default Toolbar;