import React, { Component } from 'react';

import FadeIn from '../transitions/fade-in';
import CharacterBox from './characterBox';
import ScoreDisplay from './scoredisplay';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialChars = [
    {
        name: 'Cloud',
        img: '/img/cloud_advent.jpg',
        clicked: false
    },
    {
        name: 'Sephiroth',
        img: '/img/Sephiroth_Portrait.jpg',
        clicked: false
    },
    {
        name: 'Tifa',
        img: '/img/Tifa.png',
        clicked: false
    },
    {
        name: 'Noctis',
        img: '/img/Noctis.png',
        clicked: false
    },
    {
        name: 'Auron',
        img: '/img/Auron.png',
        clicked: false
    },
    {
        name: 'Barret',
        img: '/img/Barret-FFVII.png',
        clicked: false
    },
    {
        name: 'Zell',
        img: '/img/Ff8-zell.jpg',
        clicked: false
    },
    {
        name: 'Squall',
        img: '/img/Ff8-squall.jpg',
        clicked: false
    },
    {
        name: 'Seifer',
        img: '/img/seifer_FF8.jpeg',
        clicked: false
    },
    {
        name: 'Tidus',
        img: '/img/Tidus.png',
        clicked: false
    },
    {
        name: 'Chrono',
        img: '/img/Chrono.png',
        clicked: false
    },
    {
        name: 'Frog',
        img: '/img/Frog.jpg',
        clicked: false
    },
    {
        name: 'Marle',
        img: '/img/malre_CT.jpeg',
        clicked: false
    }
    
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            characters: shuffleArray( initialChars )
        };
    }

    onCharacterClick = ( index ) =>{
        if( !this.state.characters[index].clicked ){
            this.setState({
                characters: shuffleArray( this.state.characters.map( (character, current) =>  {
                    return ( current === index ) ? { ...character, clicked:true } : character
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
            //and shuffle
        } else {
            this.setState({
                characters: shuffleArray(this.state.characters.map( character => { return { ...character, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
            //and shuffle
        }
        
    }

    render(){
        return (
            <div className="Board">
                <FadeIn 
                    in={true}
                    duration={450}
                    length={'30px'}
                    direction={'bottom'}
                    delay={'1s'}>
                    <h4>Try to click on every FF character once. Once you click a character, the grid will shuffle.<br/>Try not to click the same character twice or the game will start all over!</h4>
                </FadeIn>
                <FadeIn 
                    in={true}
                    duration={500}
                    direction={'bottom'}
                    delay={'1.5s'}>
                    <ScoreDisplay
                        score={this.state.user.score} />
                </FadeIn>
                <CharacterBox 
                    characters={this.state.characters} 
                    onCharacterClick={this.onCharacterClick} />
            </div>
        )
    }

}