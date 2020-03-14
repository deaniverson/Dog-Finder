import React from 'react';
import './style.css';

const Index = (props) => {
    return (
        <div className="filter">
            <p className="">Filter</p>
            <input aria-label="filter-input" type="text" placeholder="enter the dog type" onChange={(e) => props.onChange(e.target.value)} value={props.filterWord} />
        </div>
    );
};

export default Index;
