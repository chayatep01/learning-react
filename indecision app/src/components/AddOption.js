import React from 'react'

export default class AddOption extends React.Component{
    constructor(props){
        super(props)
        this.addOption = this.addOption.bind(this)
        this.state = {
            error : undefined
        }
    }
    addOption (e){
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.addOption(option)
        this.setState (() => ({ error }))

        if(!error){
            e.target.elements.option.value = '';
        }
        // this.setState (() => {
        //     return {
        //         error //short form error : error
        //     }
        // })
    }
    
    render (){
      return (
        <div>
            {
                this.state.error && <p className="add-option-error">{this.state.error}</p>
            }
            <form className="add-option" onSubmit={this.addOption}>
                <input className="add-option__input"type="text" name="option"/>
                <button className="button">Add Option</button>
            </form>
        </div>
        )
    }
} 
