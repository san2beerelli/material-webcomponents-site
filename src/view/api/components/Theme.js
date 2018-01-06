const Theme = {
    component : `class Theme extends React.Component {
        render() {
        const theme = {
                "primary" : "#ff9000",
                "primary-light": '#fff000',
                "primary-dark": '#ffff00',
                "secondary": '#0000ff',
                "secondary-light": '#000fff',
                "secondary-dark": '#00ffff',
                "background": '#BDBDBD'
            }
          const themeRef = (themeref) => {
            if(themeref){
                themeref.theme = theme;
            }
        };
        return (
            <mwc-theme ref={themeRef}>
            <mwc-button raised>
                Primary
            </mwc-button>
            <mwc-button stroked>
                Primary
            </mwc-button>
            </mwc-theme>
        )
         }

    }
    `,
     markdown : `## Props
| Prop | Type | Default | Required   | Description |
| ------ | ----------- | ------ | ------ | ------ |
| theme | Object | - | false | Accepts theme object |
| fonts | Array | Roboto | false | Array of font cdn urls |
| icons | Arrya | Material Icons | false | Arra of icon cdn urls|

`
}

export default Theme;