import React from 'react';

const Picture = ( props ) => {
    return (
        <section id='pic' className='section-2 picture' style={{
            background: `url(${props.image})`,
            ...props.sstyle
        }}></section>
    );
}

export default Picture;