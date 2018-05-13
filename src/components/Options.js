import React from 'react'
import Option from './Option'

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options </h3>
            <button 
                className="button button--link"
                onClick={props.deleteOptions}
            >
                Remove All 
            </button> 
        </div>
        
        {
            props.options.length === 0 && <p className="widget-message"> Please add an option </p>
        }
        {
            //To render all options
            props.options.map((option,index)=> 
                (
                <Option 
                    key={ option } 
                    count={index+1}
                    optionText={ option }
                    deleteoption={ props.deleteoption }
                />
                )
            )

        }
    </div>
    )

export default Options