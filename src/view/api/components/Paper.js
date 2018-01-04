const Paper = {
    component : `() => (
          <mwc-container flexwrap="wrap">
            <mwc-paper width="150px" height="100px">
            </mwc-paper>
            <mwc-paper elevation={3} radius={4} width="150px" height="100px">
            </mwc-paper>
            <mwc-paper elevation={6} radius={20} width="150px" height="100px">
            </mwc-paper>
            <mwc-paper elevation={10} radius={40} width="150px" height="100px">
            </mwc-paper>
            <mwc-paper radius={75} width="150px" height="100px">
            </mwc-paper>
            <mwc-paper radius={120} width="150px" height="100px">
            </mwc-paper>
          </mwc-container>
        )

    `,
     markdown : `## Props
| Prop | Type | Default | Required  | Description |
| ------ | ----------- | ------ | ------ | ------ |
| width | String | - | false |  Paper Width  |
| height | String | - | false |  Paper Height  |
| elevation | Number | 2 | false |  Paper elevation |
| radius | Number | 2 | false |  Paper Radius |
`
}

export default Paper;