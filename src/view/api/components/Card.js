const Card = {
    component : `
     () => (
    <mwc-card width="400px">
        <mwc-card-header title="Title" subtitle="Sub Title">
        </mwc-card-header>
        <mwc-card-content>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </mwc-card-content>
        <mwc-card-actions>
        <mwc-button>
            Action
        </mwc-button>
        <mwc-button>
            Action 1
        </mwc-button>
        </mwc-card-actions>
    </mwc-card>
    )
    `,
     markdown : `## Props
| Prop | Type | Default | Required | Component | Description |
| ------ | ----------- | ------ | ------ | ------ | ------ |
| width | String | - | false | Card | Card width |
| height | String | - | false | Card | Card height |
| title | String | - | false | Card Header | Card title |
| subtitle | String | - | false | Card Header | Card subtitle |
| src | String | - | false | Card Media | URL for Card Media |
| mediaheight | String | 80px | false | Card Media | Card Media Height, values should be 1x/2x/3x. It convertes to 120px/160px/240px |

## Slots
| Slot | Prop dependencies | Component | Description |
| ---- | ----------------- | ----------- | ----------- |
| mwc-card-actions | -              | Card Actions| Card Actions |
| mwc-card-content | -              | Card Content| Renders any kind of content to the card |
| mwc-card-header | -              | Card Header| Header component with title and subtitle. It will accepts all types of HTML Elements |
| mwc-card-media | -              | Card Media| Renders images on to the card |
`
}

export default Card;