import React from 'react'
import { connect } from 'react-redux'
import { reduxConstants as rc } from '../constants'
import styled from 'styled-components'

class Avatar extends React.Component {
    state = {
        photo: "https://iupac.org/wp-content/uploads/2018/05/default-avatar.png"
    }
    componentDidMount = () => {
        fetch("https://uinames.com/api/?ext")
        .then(res => res.json())
        .then(res => {
            this.setState({ photo: res.photo })
            this.props.updateName(res.name)
        })
    }
    render() {
        return (
            <Image source={{ uri: this.state.photo }} />
        )
    }
}

const
    Image = styled.Image`
        width: 44px;
        height: 44px;
        background-color: black;
        border-radius: 22px;
        margin-left: 20px;
        position: absolute;
        top: 0;
        left: 0;
    `
const
    mapDispatchToProps = dispatch => ({
        updateName: name => dispatch({
            type: rc.user.UPDATE_NAME,
            name
        })
    })
export default connect(null, mapDispatchToProps)(Avatar)