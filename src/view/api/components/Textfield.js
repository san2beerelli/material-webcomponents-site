const Textfield = {
    component : `() => (
        <mwc-container width="100%" height="100%" flexdirection="column" justifycontent="space-around" alignitems="center" >
           <mwc-textfield label="Name" showbox={true}>
           </mwc-textfield>
           <mwc-textfield label="Password" type="password" showbox={true}>
           </mwc-textfield>
           <mwc-textfield label="Text Area" textarea={true}>
           </mwc-textfield>
       </mwc-container>
  )
    `,
     markdown : `## Props
| Prop | Type | Default | Required  | Description |
| ------ | ----------- | ------ | ------ | ------ |
| type | String | text | false | text / password  type textfield |
| required | Boolean | false | false |  makes the textfield required |
| minlength | Number | 0 | false | Minimum characters length of the textfield  |
| label | String | - | false |  label for the textfield |
| value | String | - | false | value of the textfield |
| helpertext | String | - | false | helper text for textfield |
| disabled | Boolean | false | false | disabled the textfield |
| showbox | Boolean | false | false | show's the box around textfield |
| fullwidth | Boolean | false | false | makes full width textfield |
| textarea | Boolean | false | false | makes the textfield as textarea |
| outlined | Boolean | false | false | makes the outlined textfield |
| dense | Boolean | false | false | dense textfield |
| focused | Boolean | false | false | focus the textfield |
| icon | String | - | false | Adds the material icon to the textfield |
| iconposition | String | - | false | leading / trailing of the icon to the textfield |
`
}

export default Textfield;