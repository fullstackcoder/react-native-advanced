import React from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing, StatusBar } from 'react-native';
import { connect } from 'react-redux'
import styled from 'styled-components'
import { reduxConstants as rc } from '../constants'
import { Card } from '../components/Card'
import { Ionicons } from '@expo/vector-icons'
import { NotificationIcon } from '../components/Icons'
import { Logo } from '../components/Logo'
import { Course } from '../components/Course'
import Menu from '../components/Menu'
import Avatar from '../components/Avatar'

class HomeScreen extends React.Component {
    state = {
        scale: new Animated.Value(1),
        opacity: new Animated.Value(1)
    }
    componentDidMount = () => {
        StatusBar.setBarStyle("dark-content", true)
    }
    componentDidUpdate = () => {
        console.log('componentDidUpdatte')
        this.toggleMenu()
    }
    toggleMenu = () => {
        const { action } = this.props

        if (action === "openMenu") {
            Animated.timing(this.state.scale, {
                toValue: .9,
                duration: 300,
                easing: Easing.in()
            }).start()
            Animated.spring(this.state.opacity, {
                toValue: .5
            }).start()

            StatusBar.setBarStyle("light-content", true)
        } else if (action === "closeMenu") {
            Animated.timing(this.state.scale, {
                toValue: 1,
                duration: 300,
                easing: Easing.in()
            }).start()
            Animated.spring(this.state.opacity, {
                toValue: 1
            }).start()
            
            StatusBar.setBarStyle("dark-content", true)
        }
    }
    render() {
        const { name } = this.props
        
        return (
            <RootView>
                <Menu />
                <AnimatedContainer style={{ transform: [{ scale: this.state.scale}], opacity: this.state.opacity }} >
                <SafeAreaView>
                    <ScrollView style={{ height: "100%"}} >
                        <TitleBar>
                            <TouchableOpacity 
                                onPress={this.props.openMenu}
                                style={{position: "absolute", width: 50, height: 50}}
                                > 
                                <Avatar />
                            </TouchableOpacity>
                            <Title>Designcode App!</Title>
                            <Name>{name}</Name>
                            <NotificationIcon
                            color="#4775f2"
                            style={{
                                position: "absolute",
                                top: 5,
                                right: 20
                                }}
                                />
                        </TitleBar>
                        <ScrollView 
                            style={{flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30}} 
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}>
                        {logos.map((logo, index) => (
                            <Logo 
                            key={index}
                            image={logo.image}
                            text={logo.text}
                            />
                            ))}
                        </ScrollView>
                        <Subtitle>Continue Learning</Subtitle>
                
                        <ScrollView 
                            horizontal={true} 
                            style={{paddingBottom: 30}}
                            showsHorizontalScrollIndicator={false}
                            >
                            {cards.map((card, index) => (
                                <Card
                                key={index}
                                title={card.title}
                                image={card.image}
                                subtitle={card.subtitle}
                                caption={card.caption}
                                logo={card.logo}
                                />
                                ))}
                        </ScrollView>
                        <Subtitle>Popular Courses</Subtitle>
                        <CourseWrapper>
                            {
                                courses.map((course, index) => (
                                    <Course 
                                        key={index}
                                        image={course.image}
                                        title={course.title}
                                        subtitle={course.subtitle}
                                        logo={course.logo}
                                        author={course.author}
                                        avatar={course.avatar}
                                        caption={course.caption}
                                    />
                                    ))
                            }
                        </CourseWrapper>
                        </ScrollView>
                    </SafeAreaView>
                </AnimatedContainer>
            </RootView>
          );
    }
}

const
    RootView = styled.View`
        flex: 1;
        background: black;
    `,
    Containter = styled.View`
        flex: 1;
        background-color: #f0f3f5;
        border-radius: 10px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,
    Title = styled.Text`
        font-size: 16px;
        color: #b8bece;
        font-weight: 500;
    `,
    Name = styled.Text`
        font-size: 20px;
        color: #3c4560;
        font-weight: bold;
    `,
    TitleBar = styled.View`
        width: 100%;
        margin-top: 50px;
        padding-left: 80px;
    `,
    Subtitle = styled.Text`
        color: #c8c8c8;
        font-weight: 600;
        font-size: 15px;
        margin-left: 20px;
        margin-top: 20px;
        text-transform: uppercase;
    `,
    CourseWrapper = styled.View`
        /* flex-direction: column;
        justify-content: center;
        align-items: center; */
    `
const AnimatedContainer = Animated.createAnimatedComponent(Containter)

const
  logos = [
    {
      image: require('../assets/logo-framerx.png'),
      text: "Framer X"
    },
    {
      image: require('../assets/logo-figma.png'),
      text: "Figma"
    },
    {
      image: require('../assets/logo-studio.png'),
      text: "Studio"
    },
    {
      image: require('../assets/logo-react.png'),
      text: "React"
    },
    {
      image: require('../assets/logo-swift.png'),
      text: "Swift"
    },
    {
      image: require('../assets/logo-sketch.png'),
      text: "Sketch"
    }
  ],
  cards = [
    {
      title: "React Native for Designers",
      image: require('../assets/background11.jpg'),
      subtitle: "React Native",
      caption: "1 of 12 sections",
      logo: require('../assets/logo-react.png')
    },
    {
      title: "Styled Components",
      image: require('../assets/background12.jpg'),
      subtitle: "React Native",
      caption: "2 of 12 sections",
      logo: require('../assets/logo-react.png')
    },
    {
      title: "Props and Icons",
      image: require('../assets/background13.jpg'),
      subtitle: "React Native",
      caption: "3 of 12 sections",
      logo: require('../assets/logo-react.png')
    },
    {
      title: "Static Data and Loop",
      image: require('../assets/background14.jpg'),
      subtitle: "React Native",
      caption: "4 of 12 sections",
      logo: require('../assets/logo-react.png')
    }
  ],
  courses = [
    {
      title: "Prototype in InVision Studio",
      subtitle: "10 sections",
      image: require('../assets/background13.jpg'),
      logo: require('../assets/logo-studio.png'),
      author: "Meng To",
      avatar: require('../assets/avatar.jpg'),
      caption: "Design and Interactive Prototype"
    },
    {
      title: "React for Designers",
      subtitle: "12 sections",
      image: require('../assets/background11.jpg'),
      logo: require('../assets/logo-react.png'),
      author: "Meng To",
      avatar: require('../assets/avatar.jpg'),
      caption: "Learn to Design and Code a React site"
    },
    {
      title: "Design and Code with Framer X",
      subtitle: "10 sections",
      image: require('../assets/background14.jpg'),
      logo: require('../assets/logo-framerx.png'),
      author: "Meng To",
      avatar: require('../assets/avatar.jpg'),
      caption: "Create Powerful Design and Code Compoenents for your app"
    },
    {
      title: "Design System in Figma",
      subtitle: "10 sections",
      image: require('../assets/background6.jpg'),
      logo: require('../assets/logo-figma.png'),
      author: "Meng To",
      avatar: require('../assets/avatar.jpg'),
      caption: "Complete Guide to Desgining a Site using a collaborative design tool"
    }
  ]

const
    mapStateToProps = state => ({
        action: state.action,
        name: state.name
    }),
    mapDispatchToProps = dispatch => ({
        openMenu: () => dispatch({
            type: rc.menuConstants.OPEN_MENU
        })
    })

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)