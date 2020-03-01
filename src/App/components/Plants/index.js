import React from 'react';
import './Plants.scss';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';



const Plants = (props) => {
    return (
        <div className="plants">
                        <div className="plant-slider">
                            <div className="plant plant-1" style={{
                                background : `url(${props.state.plants[props.state.plantCounter].picture})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }} ></div>
                            <div className="plant plant-2" style={{
                                background : `linear-gradient(90deg, transparent, #000), url(${
                                    props.state.plants[props.state.plantCounter].picture
                                })`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                        </div>

                        <div className="plant-slider-control">
                            <div className="moves">
                                <a href="#" onClick={ () => { props.changeState(props.state.plantCounter - 1) } }><FiChevronLeft/></a>
                                <a href="#" onClick={ () => { props.changeState(props.state.plantCounter + 1) } }><FiChevronRight/></a>
                            </div>

                            <div className="plant-state">
                                <span className='state-line'></span><h1>0{props.state.plantCounter + 1}</h1>
                            </div>
                        </div>
        </div>
    )
}

export default Plants;