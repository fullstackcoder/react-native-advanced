import React from 'react'
import styled from 'styled-components'

class CoursesScreen extends React.Component {

    render() {
        return (
            <Container>
                <Text>Courses Screen</Text>
            </Container>
        )
    }
}

const
    Container = styled.View`
        flex: 1;
        justify-content: center;
        align-items: center;
    `,
    Text = styled.Text`
    
    `

export default CoursesScreen