const Progress = {
    component : `() => (
         <div style={{
             display: 'flex',
             height: '100%',
             flexDirection : 'column',
             justifyContent : 'space-between'
             }}>
             <mwc-progress></mwc-progress>
             <mwc-progress type="determinate"></mwc-progress>
             <mwc-progress type="buffer"></mwc-progress>
             <mwc-progress reversed={true}></mwc-progress>
             <mwc-progress progressbarcolor="#ff00ff"></mwc-progress>
         </div>

        )
    `,
     markdown : `## Props
| Prop | Type | Default | Required  | Description |
| ------ | ----------- | ------ | ------ | ------ |
| show | Boolean | true | false |  true will show and false will hide the progress |
| type | String | indeterminate | false | Type of Progress determinate / indeterminate / buffer  |
| reversed | Boolean | false | false |  Reverse the Progress status |
| progressbarcolor | String | - | false |  progressbarcolor |
| bufferbarcolor | String | - | false |  bufferbarcolor |

## Methods
| Event | Description |
| ------ | ------ |
| progress  | sets the progress value |
| buffer  | sets the buffer value |

`
}

export default Progress;