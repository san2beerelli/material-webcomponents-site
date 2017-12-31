import React from "react";
import ReactDOM from "react-dom";
import App from './view/app'
import style from './styles/style'
import ReactDependentScript from 'react-dependent-script'

style()
var mountNode = document.getElementById("app");
const AppContainer = () => <ReactDependentScript
                            loadingComponent={<div>loading...</div>}
                            scripts={['https://unpkg.com/material-webcomponents@1.0.0-beta.2/dist/material-webcomponents.js']}>
    <App />
  </ReactDependentScript>
ReactDOM.render(<AppContainer />, mountNode);