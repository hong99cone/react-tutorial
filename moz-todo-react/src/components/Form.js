import React from 'react';




function Form(props) {
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask('Hey!')
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    What needs to be done?👀
                </label>
            </h2>
            <input 
                type="text" 
                className="input input__lg" 
                name='text'
                autoComplete='off'
                />
                <button type='submit' className="btn btn__primary btn__lg">
                    Add
                </button>
        </form>
    )
}



export default Form;