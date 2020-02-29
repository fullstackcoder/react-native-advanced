import React from 'react'
import { TouchableOpacity, StatusBar, Platform } from 'react-native'
import styled from 'styled-components'
import CloseButton from '../components/CloseButton'

class SectionScreen extends React.Component {

    componentDidMount = () => {
        StatusBar.setBarStyle("light-content", true)
    }
    componentWillUnmount = () => {
        StatusBar.setBarStyle("dark-content", true)
        if (Platform.OS === "android") StatusBar.setBarStyle("light-content", true)
    }
    render() {
        const
            { section } = this.props.route.params,
            { navigation } = this.props
        return (
            <Container>
                <StatusBar hidden />
                <Cover>
                    <Image source={section.image} />
                    <Wrapper>
                        <Logo source={section.logo} />
                        <Subtitle>{section.subtitle}</Subtitle>
                    </Wrapper>
                    <Title>{section.title}</Title>
                    <Caption>{section.caption}</Caption>
                </Cover>
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            top: 20,
                            right: 20
                        }}
                        onPress={() => navigation.goBack()}
                    >

                        <CloseButton />
                    </TouchableOpacity>
            </Container>
        )
    }
}

const
    Container = styled.View`
        flex: 1;
    `,
    Cover = styled.View`
        height: 375px;
    `,
    Image = styled.Image`
        width: 100%;
        height: 100%;
        position: absolute;
    `,
    Title = styled.Text`
        font-size: 24px;
        color: white;
        font-weight: bold;
        width: 170px;
        position: absolute;
        top: 68px;
        left: 20px;
    `,
    Caption = styled.Text`
        font-size: 17px;
        color: white;
        position: absolute;
        bottom: 20px;
        left: 20px;
        width: 300px;
    `,
    Wrapper = styled.View`
        flex-direction: row;
        position: absolute;
        top: 40px;
        left: 20px;
        align-items: center;
    `,
    Logo = styled.Image`
        width: 24px;
        height: 24px;
    `,
    Subtitle = styled.Text`
        font-size: 15px;
        font-weight: 600;
        color: rgba(255,255,255,.8);
        margin-left: 5px;
        text-transform: uppercase;
    `

export default SectionScreen