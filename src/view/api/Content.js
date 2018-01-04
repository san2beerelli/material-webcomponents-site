import React, { Component } from 'react';
import styled from 'styled-components'
import { LiveEdit } from '../../styles/components'
import ReactMarkdown from 'react-markdown'

const ContentWrapper = styled.div`
  width : auto;
  height : 100%;
  padding : 50px;
`

const Content = (props) => {
    console.log(props)
    if(props.componentObj){
     return(
        <ContentWrapper>
            <LiveEdit code={props.componentObj.component} noInline={false} />
            <ReactMarkdown source={props.componentObj.markdown} />
        </ContentWrapper>
     )
    }
}

export default Content;