import React from 'react'
import { Grid, Image, Header, Button, Card, Modal, Input } from 'semantic-ui-react'
import GameCard from './card'
import ClueModal from './modal'

import data from '../assets/game.json'
import styles from './gameGrid.css'
function GameGrid() {
    const [openCount, setOpenCount] = React.useState(0)
    const [open, setOpen] = React.useState([])
    const [flipped, setFlipped] = React.useState([])

    var clues = {};

    for (var clue of data.clues){
        var index = clue.substring(15,18)
        var first = 'class="clue_text">'
        var second = '</td>'
        var text = clue.match(new RegExp(first + "(.*)" + second))[1];
        text = text.replace('<span class="nobreak">', ' ')
        text = text.replace('</span>', ' ')
        text = text.replace('<br>', ' ')
        text = text.replace('&amp;', '&')
        
        text = text;
        clues[index] = text;
    }

    return (
        <Grid columns={6} divided padded>
            <Grid.Row stretched>
                <Grid.Column>
                    <GameCard isCategory="true" text={data.categories[0]}></GameCard>
                </Grid.Column>
                <Grid.Column>
                    <GameCard isCategory="true" text={data.categories[1]}></GameCard>
                </Grid.Column>
                <Grid.Column>
                    <GameCard isCategory="true" text={data.categories[2]}></GameCard>
                </Grid.Column>
                <Grid.Column>
                    <GameCard isCategory="true" text={data.categories[3]}></GameCard>
                </Grid.Column>
                <Grid.Column>
                    <GameCard isCategory="true" text={data.categories[4]}></GameCard>
                </Grid.Column>
                <Grid.Column>
                    <GameCard isCategory="true" text={data.categories[5]}></GameCard>
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$200" text={clues["1_1"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$200" text={clues["2_1"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$200" text={clues["3_1"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$200" text={clues["4_1"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$200" text={clues["5_1"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$200" text={clues["6_1"]} />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$400" text={clues["1_2"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$400" text={clues["2_2"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$400" text={clues["3_2"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$400" text={clues["4_2"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$400" text={clues["5_2"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$400" text={clues["6_2"]} />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$600" text={clues["1_3"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$600" text={clues["2_3"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$600" text={clues["3_3"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$600" text={clues["4_3"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$600" text={clues["5_3"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$600" text={clues["6_3"]} />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$800" text={clues["1_4"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$800" text={clues["2_4"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$800" text={clues["3_4"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$800" text={clues["4_4"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$800" text={clues["5_4"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$800" text={clues["6_4"]} />
                </Grid.Column>
            </Grid.Row>

            <Grid.Row>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$1000" text={clues["1_5"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$1000" text={clues["2_5"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$1000" text={clues["3_5"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$1000" text={clues["4_5"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$1000" text={clues["5_5"]} />
                </Grid.Column>
                <Grid.Column>
                    <ClueModal open={open} setOpen={setOpen} openCount={openCount} setOpenCount={setOpenCount} value="$1000" text={clues["6_5"]} />
                </Grid.Column>
            </Grid.Row>

        </Grid>
    )
}

export default GameGrid
