const Tabbar = {
    component : `class Tabbar extends React.Component {
        constructor() {
            super()
            this.state = {
                tabs: [
                    {label:'Recents',icon:'phone'},
                    {label:'Favorites',icon:'favorite'},
                    {label:'Nearby',icon:'person_pin'}
                ]
            }
        }

        render() {
            const {tabs} = this.state
            const tabbarRef = (tabbar) => {
            if(tabbar){
                tabbar.tabs = tabs
            }
        }
        return (
            <mwc-container width="100%" height="100%" justifycontent="space-around" alignitems="center" >
                <mwc-tabbar ref={tabbarRef}>
                </mwc-tabbar>
            </mwc-container>
        )
        }
    }

    `,
     markdown : `## Props
| Prop | Type | Default | Required  | Description |
| ------ | ----------- | ------ | ------ | ------ |
| activeindex | Number | 0 | false | activate the tab based on the number |
| scroller | Boolean | false | false | Adds / Removes the scroller based on the flag |
| tabs | Array | - | false | tabs will render the tabs on tabbar |

## Events
| Event | Description |
| ------ | ------ |
| change  | dispatched when the tab changed |

`
}

export default Tabbar;