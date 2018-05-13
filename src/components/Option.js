import React from 'react'

const Option = (props) => (
    <div className="option option__text">
        <p>{props.count}. {props.optionText} </p>
            <button 
                className="button button--link"
                onClick ={(e) => {
                    props.deleteoption(props.optionText)
                }}
            >
                remove 
            </button>
    </div>
)

export default Option