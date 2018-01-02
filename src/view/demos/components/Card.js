import React from 'react'
import styled from 'styled-components'

const CardBg = styled.div`
    background-color : white;
`

export const Card1 = {
    title : 'Simple Card',
    component : [
        <CardBg key="SimpleCard1">
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
                    Learn more
                </mwc-button>
                </mwc-card-actions>
            </mwc-card>
        </CardBg>
    ]
}
export const Card2 = {
    title : 'Media Card',
    component : [
        <CardBg key="MediaCard1">
            <mwc-card width="400px">
                <mwc-card-media src="https://picsum.photos/400" mediaheight="3x"></mwc-card-media>
                 <mwc-card-header title="Media">
                </mwc-card-header>
                 <mwc-card-content>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </mwc-card-content>
                <mwc-card-actions>
                <mwc-button>
                    Share
                </mwc-button>
                <mwc-button>
                    Learn more
                </mwc-button>
                </mwc-card-actions>
            </mwc-card>
        </CardBg>
    ]
}