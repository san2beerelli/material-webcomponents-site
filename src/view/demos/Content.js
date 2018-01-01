import React, { Component } from 'react';
import styled from 'styled-components'
import * as DemoComponents from './components'

const ContentWrapper = styled.div`
  width : 50%;
  height : 100%;
  margin-top : 50px;
  display: flex;
  flex-direction : column;
`
const PaperBg = styled.div`
  background-color : #BDBDBD;
  width : 100%;
  height : 100%;
  border-radius : 4px;
  padding: 20px;
`
const renderEachComponent = (props) => {
    return (
        <ContentWrapper  key={`${new Date()}${props.title}`}>
           <mwc-typography type="title">
               {props.title}
           </mwc-typography>
            <PaperBg>
                <mwc-container width="100%" justifycontent="space-around" alignitems="center" >
                  {
                      props.component
                  }
                </mwc-container>
            </PaperBg>
        </ContentWrapper>
    )
}
const renderContentWrapper = (props) => {
    const demoComponent = props.demoComponent;
    const Components = DemoComponents[demoComponent]
    let compArr = [];
    Object.keys(Components).forEach((val,indx) => {
        const comp = DemoComponents[demoComponent][val]
        const eachComponent = renderEachComponent(comp)
        compArr.push(eachComponent)
    })
   return compArr

}
const Content = (props) => {
   return renderContentWrapper(props)
}

export default Content;