import React from 'react'
import { Grid, Image, Header, Button, Card, Modal, Input } from 'semantic-ui-react'
import GameCard from './card'

function ClueModal({ open, setOpen, openCount, setOpenCount, text, value, ...rest}) {
  const [flipped, set] = React.useState(false)

    return (
        <Modal
            onClose={() => set(false)}
            onOpen={() => set(true)}
            open={flipped}
            trigger={
                <GameCard isCategory="false" text={value} />
            }
        >
            <Modal.Content>
                <Modal.Description>
                    <Header>{text}</Header>
                    {/* <p>
                    What is...?
                </p> */}
                    <Input
                        style={{ width: '100%' }}
                        icon="arrow alternate circle right outline"
                        placeholder='What is...'
                    />
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
                <Button color='black' onClick={() => set(false)}>
                    Skip
                </Button>
                <Button
                    content="Submit"
                    labelPosition='right'
                    icon='checkmark'
                    onClick={() => set(false)}
                    positive
                />
            </Modal.Actions>
        </Modal>)
}

export default ClueModal
