import React from 'react'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'

export const MenuItem = props => (
    <Container>
        <IconView>
            <Ionicons
                name={props.icon}
                size={24}
                color="#546bfb"
            />
        </IconView>
        <Content>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
        </Content>
    </Container>
)

const
    Container = styled.View`
        flex-direction: row;
        margin: 15px 0;
    `,
    IconView = styled.View`
        width: 32px;
        height: 32px;
        justify-content: center;
        align-items: center;
    `,
    Content = styled.View`

    `,
    Title = styled.Text`
        color: #3c4560;
        font-size: 24px;
        font-weight: 600;
    `,
    Text = styled.Text`
        color: #3c4560;
        font-weight: 600;
        opacity: .6;
        margin-top: 5px;
    `
