import React from 'react'



const Action = (props) => {
    return (
        <div>
            <button 
                onClick ={props.pickOption}
                disabled={!props.hasOptions}
                > 
                Randomize your life here. 
            </button>
        </div>
        )

}

export default Action