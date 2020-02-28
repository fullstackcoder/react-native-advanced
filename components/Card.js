import React from 'react'
import styled from 'styled-components'


const Card = props => (
    <Container>
        <Cover>
            <Image source={props.image} />
            <Title>{props.title}</Title>
        </Cover>
        <Content>
            <Logo source={props.logo} />
            <Wrapper>
                <Caption>{props.caption}</Caption>
                <Subtitle>{props.subtitle}</Subtitle>
            </Wrapper>
        </Content>
    </Container>
)


const
    Container = styled.View`
        background-color: white;
        width: 315px;
        height: 280px;
        border-radius: 14px;
        margin-left: 20px;
        margin-top: 20px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.15);
    `,
    Cover = styled.View`
        width: 100%;
        height: 200px;
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
        overflow: hidden;
    `,
    Image = styled.Image`
        width: 100%;
        height: 100%;
        position: absolute;
    `,
    Title = styled.Text`
        color: white;
        font-size: 24px;
        font-weight: bold;
        margin-top: 20px;
        margin-left: 20px;
        width: 170px;
    `,
    Content = styled.View`
        padding-left: 20px;
        flex-direction: row;
        align-items: center;
        height: 80px;
    `,
    Logo = styled.Image`
        width: 44px;
        height: 44px;
    `,
    Caption = styled.Text`
        color: #3c4560;
        font-size: 20px;
        font-weight: 600;
    `,
    Subtitle = styled.Text`
        color: #b8bece;
        font-weight: 600;
        font-size: 15px;
        text-transform: uppercase;
        margin-top: 4px;
    `,
    Wrapper = styled.View`
        margin-left: 10px;
    `

export {
    Card
}
