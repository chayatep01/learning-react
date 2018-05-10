class IndecisionApp extends React.Component {
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

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2> {props.subtitle}</h2>
        </div>
        )
}



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

const Option = (props) => {
    return (
        <div>
            {props.optionText} 
            <button 
                onClick ={(e) => {
                    props.deleteoption(props.optionText)
                }}
            >
                remove 
            </button>
        </div>
        )
} 



class AddOption extends React.Component{
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
                this.state.error && <p>{this.state.error}</p>
            }
            <form onSubmit={this.addOption}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
        )
    }
} 



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))