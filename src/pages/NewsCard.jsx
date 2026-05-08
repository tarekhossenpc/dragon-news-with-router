import React from 'react';

const NewsCard = ({news}) => {
    const {id,title}=news
    return (
        <div>
            <h1 className='card'>{title}</h1>
        </div>
    );
};

export default NewsCard;