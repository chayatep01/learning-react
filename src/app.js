class IndecisionApp extends React.Component {
    constructor(props){
        super(props)
        this.deleteOption = this.deleteOption.bind(this)
        this.pickOption = this.pickOption.bind(this)
        this.addOption =  this.addOption.bind(this)
        this.state = {
           options : []
        }
    }
    
    deleteOption() {
        this.setState(()=>{
            return {
                options : []
            }
        })
    }
    
    addOption(option){
        if(!option){
            return 'Enter valid option'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exist'
        } 
        this.setState((prevState) => {
            return {
                options : prevState.options.concat(option)
            }
        })
        
    }
    
    pickOption() {
        const randomNum = Math.floor(Math.random()*this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }

    render() {
        const title  = 'Indecision App'
        const subtitle = 'Let computer control your life .'
        return(
        <div>
            <Header title={title} subtitle={subtitle} />
            <Action 
              hasOptions={this.state.options.length > 0 }
              pickOption={this.pickOption}
              />
            <Options 
              options={this.state.options}
              deleteOption={this.deleteOption}
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
            <button onClick={props.deleteOption}>Remove All </button>
            {
                //To render all options
                props.options.map((option )=> <Option key={option} optionText={option} />)

            }
        </div>
        )
}

const Option = (props) => {
    return (
        <div>
            {props.optionText} 
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
        this.setState (() => {
            return {
                error //short form error : error
            }
        })
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