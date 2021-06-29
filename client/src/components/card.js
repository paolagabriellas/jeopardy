import React from 'react'
import { Grid, Image, Header, Button, Card, Modal, Input } from 'semantic-ui-react'


function GameCard({isCategory, text, ...rest}) {
    if (isCategory == "true") {
        return (
            <Card style={{ backgroundColor: "#050F7D" }}>
                <Card.Content>
                    <Card.Header textAlign="center" style={{ color: '#ffffff' }}>{text}</Card.Header>
                </Card.Content>
            </Card>
        )
    }
    else {
        return (

            <Card {...rest} style={{ backgroundColor: "#050F7D" }}>
                <Card.Content>
                    <Card.Header textAlign="center" style={{ color: '#D59F4A' }}>{text}</Card.Header>
                </Card.Content>
            </Card>
        )
    }
}
export default GameCard

