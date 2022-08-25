import React from 'react';


function FilterButton(props) {
    return (
        <button 
        className="btn toggle-btn" 
        type='button' 
        aria-pressed= {props.isPressed}
        onClick={() => props.setFilter(props.name)}
        >
            <span className="visually-hidden">Show</span>
            <span>{props.name}</span>
            <span className="visually-hidden">Tasks</span>
        </button>
    );
}

export default FilterButton;