import React from 'react'
import Header from './Header'
import AddOption from './AddOption'
import Action from './Action'
import Options from './Options'

export default class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.deleteOptions = this.deleteOptions.bind(this)
        this.deleteoption = this.deleteoption.bind(this)
        this.pickOption = this.pickOption.bind(this)
        this.addOption =  this.addOption.bind(this)
        this.state = {
           options : []
        }
    }
    
    componentDidMount(){
        try {
        const json = localStorage.getItem('options')
        const options = JSON.parse(json)

        if(options){
            this.setState(() => ({ options }))
        }


        } catch (e) {
            //Do nothing
        }
    }

    componentDidUpdate(prevProps ,  prevState){
        if(prevState.options.length != this.state.options.length){
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options',json)
        }
    }
    
    deleteOptions() {
        this.setState(()=> ({options : []}) )
    } 

    deleteoption(optionToRemove) {
            this.setState((prevState)=> ({
                options : prevState.options.filter((option)=> {
                    return optionToRemove != option
                })
            }))
    }
    
    addOption(option){
        if(!option){
            return 'Enter valid option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        } 
        this.setState((prevState)=>({options :prevState.options.concat(option)}))
        // this.setState((prevState) => {
        //     return {
        //         options : prevState.options.concat(option)
        //     }
        // })
        
    }
    
    pickOption() {
        const randomNum = Math.floor(Math.random()*this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    render() {
        const title = 'IndecisionApp'
        const subtitle = 'Let computer control your life .'
        return(
        <div>
            <Header title = {title} subtitle={subtitle} />
            <Action 
              hasOptions = {this.state.options.length > 0 }
              pickOption = {this.pickOption}
              />
            <Options 
              options = {this.state.options}
              deleteOptions = {this.deleteOptions}
              deleteoption = {this.deleteoption}
              />
            <AddOption 
              addOption={this.addOption}
            />
        </div>
        )
    }
}