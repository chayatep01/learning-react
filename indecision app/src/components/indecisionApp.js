import React from 'react'
import Header from './Header'
import AddOption from './AddOption'
import Action from './Action'
import Options from './Options'
import OptionModal from './OptionModal'

export default class IndecisionApp extends React.Component {


    constructor(props){
        super(props)
        this.deleteOptions = this.deleteOptions.bind(this)
        this.deleteoption = this.deleteoption.bind(this)
        this.pickOption = this.pickOption.bind(this)
        this.addOption =  this.addOption.bind(this)
        this.clearSelected = this.clearSelected.bind(this)
        this.state = {
           options : [] ,
           selectedOption : undefined
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

    componentWillMount(){
        console.log('componentwillmount')
    }
    
    deleteOptions (){
        this.setState(()=> ({options : []}) )
    } 

    clearSelected  ()  {
         this.setState(()=> ({ selectedOption: undefined }) )
     } 
    // clearSelected  () {
    //     this.setState(() =>({ selectedOption:undefined }) )
    // }

    deleteoption (optionToRemove) {
            this.setState((prevState)=> ({
                options : prevState.options.filter((option)=> {
                    return optionToRemove != option
                })
            }))
    }
    
    addOption (option) {
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
    
    pickOption  () {
        const randomNum = Math.floor(Math.random()*this.state.options.length)
        const option = this.state.options[randomNum]
        this.setState(()=>({
                selectedOption : option
            })
        )
    }

    render() {
        const title = 'IndecisionApp'
        const subtitle = 'Let computer control your life .'
        return(

        
        <div>
            
                <Header title = {title} subtitle={subtitle} />
                <div className="container">
                <Action 
                hasOptions = {this.state.options.length > 0 }
                pickOption = {this.pickOption}
                />
                <div className="widget">
                <Options 
                options = {this.state.options}
                deleteOptions = {this.deleteOptions}
                deleteoption = {this.deleteoption}
                />
                
                <AddOption 
                addOption={this.addOption}
                />
                </div>
            </div>
            
            <OptionModal 
               selectedOption = {this.state.selectedOption}
               clearSelected = {this.clearSelected}
               
            />
        </div>
        )
    }
   
}