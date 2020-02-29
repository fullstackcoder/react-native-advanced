import React from 'react'
import { Dimensions } from 'react-native'
import styled from 'styled-components'
import { width } from '../constants'


const getCourseWidth = width => {
    var cardWidth = width - 40
    
    if (cardWidth > 768 && cardWidth < 1024) {
        cardWidth = ( width - 60) / 2
    }
    if (cardWidth >= 1024) {
        cardWidth = ( width - 80 ) / 3
    }
    return cardWidth
}

export class Course extends React.Component {
    state = {
        cardWidth: getCourseWidth(width)
    }
    componentDidMount = () => {
        Dimensions.addEventListener("change", this.adaptLayout)
    }
   
    adaptLayout = dimensions => {
        this.setState({
            cardWidth: getCourseWidth(dimensions.window.width)
        })
    }
    render() {
        const { props } = this
        return (
            <Container style={{ width: this.state.cardWidth }}>
                <Cover>
                    <Image source={props.image} />
                    <LogoWrapper>
                        <Logo source={props.logo} resizeMode="contain" />
                    </LogoWrapper>
                    <Subtitle>{props.subtitle}</Subtitle>
                    <Title>{props.title}</Title>
                </Cover>
                <Content>
                    <Avatar source={props.avatar}/>
                    <Caption>{props.caption}</Caption>
                    <Author>{props.author}</Author>
                </Content>
            </Container>
        )
    }
}

const
    Container = styled.View`
        width: 335px;
        height: 335px;
        background-color: white;
        margin: 10px 10px;
        border-radius: 14px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.15);
    `,
    Cover = styled.View`
        height: 260px;
        border-top-left-radius: 14px;
        border-top-right-radius: 14px;
        overflow: hidden;
        justify-content: flex-end;
    `,
    Image = styled.Image`
        width: 100%;
        height: 100%;
        position: absolute;
    `,
    LogoWrapper = styled.View`
        position: absolute;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
    `,
    Logo = styled.Image`
        width: 48px;
        height: 48px;
    `,
    Title = styled.Text`
        font-size: 24px;
        color: white;
        font-weight: 600;
        margin-top: 4px;
        margin-left: 20px;
        margin-bottom: 20px;
        width: 170px;
    `,
    Subtitle = styled.Text`
        font-size: 15px;
        font-weight: 500;
        color: rgba(255,255,255,0.8);
        text-transform: uppercase;
        margin-left: 20px;
    `,
    Content = styled.View`
        padding-left: 62px;
        height: 75px;
        justify-content: center;
    `,
    Avatar = styled.Image`
        width: 32px;
        height: 32px;
        position: absolute;
        top: 20px;
        left: 20px;
        border-radius: 16px;
    `,
    Caption = styled.Text`
        font-size: 14px;
        color: #3c4560;
        font-weight: 500;
    `,
    Author = styled.Text`
        font-size: 13px;
        color: #b8bece;
        font-weight: 500;
        margin-top: 4px;
    `