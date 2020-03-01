import React, { Component } from 'react';
import './Home.scss';

// React Reveal
import Fade from 'react-reveal/Fade';

import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Images
import Image from '../../assets/plant-1.jpeg';
import Image1 from '../../assets/plant-2.jpeg';
import Image2 from '../../assets/plant-3.jpg';

// Components
import Header from '../../components/Header';
import Picture from '../../components/Picture';
import Plants from '../../components/Plants';
import Nav from '../../components/Navigation';
import Info from '../../components/Info';

import Menu from '../../components/Menu';

class Home extends Component {

    state = {

        menu: false,

        plantCounter : 0,

        plants : [
            { name : 'Xerrenium', description: 'Plants are extraordinary living things. Although they seem simple, they are actually, in some ways, more complicated.', picture : Image },
            { name : 'Rubber Plant', description: 'Plants are extraordinary living things. Although they seem simple, they are actually, in some ways, more complicated.', picture : Image1 },
            { name : 'Aloyee', description: 'Plants are extraordinary living things. Although they seem simple, they are actually, in some ways, more complicated.', picture : Image2 },
        ]
    }

    changeState = (value) => {

        if ( value < 0 ) {
            value = this.state.plants.length - 1;
        } else if ( value >= this.state.plants.length ) {
            value = 0;
        } 

        this.setState({
            ...this.state,
            plantCounter : value
        })
    }

    toggleMenu = () => {
        this.setState({
            ...this.state,
            menu : !this.state.menu
        })
    }

    render = () => {
        return (
            <TransitionGroup>
            <CSSTransition key={this.state.plantCounter} timeout={500} classNames="page">
            
            
            { !this.state.menu ? <div id="homepage-wrapper">

                <Header/>


                <Picture image = { this.state.plants[ this.state.plantCounter ].picture  } sstyle={{ backgroundSize: 'cover', backgroundPosition: 'center' }}/>


                    <section className='section-3 info'>
                        <Nav toggleMenu={this.toggleMenu} />
                        <Info 
                            name = { this.state.plants[ this.state.plantCounter ].name } 
                            text = { this.state.plants[ this.state.plantCounter ].description  } />

                        <Plants state={ this.state } changeState = { this.changeState } />

                    </section>
                </div> : <Fade><Menu state={this.state} toggleMenu={this.toggleMenu}/></Fade>
                
                }

                </CSSTransition>
                </TransitionGroup>
        )
    }
}

export default Home;