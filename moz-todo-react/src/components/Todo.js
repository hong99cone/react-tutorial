import React from 'react';
//  Components must always return something
export default function Todo(props) {
    return (
        <li className="todo stack-small">
        <div className="c-ab">
          <input id={props.id} type="checkbox" defaultChecked={props.completed} />
          <label htmlFor="todo-0" className="todo-label">
            {props.name}
          </label>
        </div>
        <div className="btn-gruop">
          <button className="btn" type="button">
            Edit <span className="visually-hidden">{props.name}</span>
          </button>
          <button className="btn btn__danger" type="button">
            Delete <span className="visually-hidden">{props.name}</span>
          </button>
        </div>
      </li>
     
    )
}