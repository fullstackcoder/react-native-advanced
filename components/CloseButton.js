import React from 'react'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

const CloseButton = props => (
    <CloseView>
        <Ionicons
            name="ios-close"
            size={44}
            color="#546bfb"
        />
    </CloseView>
)

const
    CloseView = styled.View`
        width: 44px;
        height: 44px;
        border-radius: 22px;
        background-color: white;
        justify-content: center;
        align-items: center;
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    `

export default CloseButton