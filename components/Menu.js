import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Animated, TouchableOpacity, TouchableHighlightBase } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { height, reduxConstants as rc } from '../constants'
import { MenuItem } from './MenuItem'

class Menu extends React.Component {
    state = {
        top: new Animated.Value(height)
    }
    getSnapshotBeforeUpdate = (prevProps, prevState) => {
        const { action } = this.props

        if (action !== prevProps.action) {
            return action
        }
        return null
    }
    componentDidUpdate = (prevProps, prevState, snapshot) => {
        console.log('snapshot', snapshot)
        if (snapshot) {
            this.toggleMenu()
        }
    }
    componentDidMount = () => {
        this.toggleMenu()
    }
    toggleMenu = () => {
        const { action } = this.props
        console.log('toggleMenu!', action)

        if (action === "openMenu") {
            Animated.spring(this.state.top, {
                toValue: 54
            }).start()
        } else if (action === "closeMenu") {
            Animated.spring(this.state.top, {
                toValue: height
            }).start()
        }
    }
    render() {
        const { top } = this.state
        return (
            <AnimatedContainer style={{top: top}} >
                <Cover>
                    <Image source={require('../assets/background2.jpg')} />
                    <Title>Meng To</Title>
                    <Subtitle>Designer at Design+Code</Subtitle>
                </Cover>

                <TouchableOpacity 
                    onPress={this.props.closeMenu} 
                    style={{
                        position: "absolute",
                        top: 120,
                        left: "50%",
                        marginLeft: -22,
                        zIndex: 1
                    }}
                    >
                    <CloseView>
                        <Ionicons
                            name="ios-close"
                            size={44}
                            color="#546bfb"
                        />
                    </CloseView>
                </TouchableOpacity>
                <Content>
                    {
                        items.map((item, index) => (
                            <MenuItem 
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                text={item.text}
                            />
                        ))
                    }
                </Content>
            </AnimatedContainer>
        )
    }
}

const
    Container = styled.View`
        position: absolute;
        background-color: white;
        width: 100%;
        height: 100%;
        z-index: 100;
        border-radius: 20px;
        overflow: hidden;
    `,
    Cover = styled.View`
        height: 142px;
        background-color: black;
        justify-content: center;
        align-items: center;
    `,
    Image = styled.Image`
        position: absolute;
        width: 100%;
        height: 100%;
    `,
    Title = styled.Text`
        font-size: 24px;
        color: white;
        font-weight: 600;
    `,
    Subtitle = styled.Text`
        font-size: 13px;
        color: rgba(255,255,255,0.5);
    `,
    Content = styled.View`
        height: ${height};
        background-color: #f0f3f5;
        padding: 50px;
    `,
    CloseView = styled.View`
        width: 44px;
        height: 44px;
        border-radius: 22px;
        background-color: white;
        justify-content: center;
        align-items: center;
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);
    `
const AnimatedContainer = Animated.createAnimatedComponent(Container)
const items = [
    {
        icon: "ios-settings",
        title: "Account",
        text: "settings"
    },
    {
        icon: "ios-card",
        title: "Billing",
        text: "payments"
    },
    {
        icon: "ios-compass",
        title: "Learn React",
        text: "start course"
    },
    {
        icon: "ios-exit",
        title: "Logout",
        text: "see ya soon!"
    }
]

const
    mapStateToProps = state => ({
        action: state.action
    }),
    mapDispatchToProps = dispatch => ({
        closeMenu: () => dispatch({
            type: rc.menuConstants.CLOSE_MENU
        })
    })


export default connect(mapStateToProps, mapDispatchToProps)(Menu)