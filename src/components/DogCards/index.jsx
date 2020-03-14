import React from 'react';
import './style.css';

const Index = (props) => {
    const {
        img,
        desc,
    } = props;
    return (
        <div className="dogCard">
            <img src={img} alt={desc} />
            <div className="desc">{desc}</div>
        </div>
    );
};

export default Index;
