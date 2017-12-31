const Card = {
    component : `
     () => (
    <webmd-card width="400px">
        <webmd-card-header title="Title" subtitle="Sub Title">
        </webmd-card-header>
        <webmd-card-content>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </webmd-card-content>
        <webmd-card-actions>
        <webmd-button>
            Action
        </webmd-button>
        <webmd-button>
            Action 1
        </webmd-button>
        </webmd-card-actions>
    </webmd-card>
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
| webmd-card-actions | -              | Card Actions| Card Actions |
| webmd-card-content | -              | Card Content| Renders any kind of content to the card |
| webmd-card-header | -              | Card Header| Header component with title and subtitle. It will accepts all types of HTML Elements |
| webmd-card-media | -              | Card Media| Renders images on to the card |
`
}

export default Card;