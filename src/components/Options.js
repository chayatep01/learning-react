import React from 'react'
import Option from './Option'

const Options = (props) => {

    return (
    <div>
        <button onClick={props.deleteOptions}>Remove All </button>
        {
            props.options.length === 0 && <p> Please add an option </p>
        }
        {
            //To render all options
            props.options.map((option )=> 
                (
                <Option 
                    key={ option } 
                    optionText={ option }
                    deleteoption={ props.deleteoption }
                />
                )
            )

        }
    </div>
    )
}

export default Options