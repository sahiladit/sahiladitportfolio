import React from 'react';

const Card = ({source,name,desc}) => {
    return (
        <div className='h-2/3 w-3/4 top-10 left-0 bg-red-500 relative'>
            <h1>{name}</h1>
            <div></div>
        </div>
    );
}

export default Card;
