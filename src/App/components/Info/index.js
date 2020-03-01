import React from 'react';
import './Info.scss';

const Info = ( props ) => {
    return (
        <div className="description">
                        <h1 className="plant-name">
                            { props.name }
                            <hr className="plant-border"/>
                        </h1>

                        <p className="text">
                            { props.text }
                        </p>

                        <a href="#" className="btn-discover">Discover</a>
        </div>
    )
}

export default Info;