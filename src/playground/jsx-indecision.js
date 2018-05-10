console.log("App is running")
//live-server public
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

const app = {
    title:'Indecision App',
    subtitle: 'Let computer decides for you !' ,
    options:[]
}

const onFormSubmit = (e) =>{
    e.preventDefault()
    const option = e.target.elements.option.value
    console.log('form submitted')
    console.log(option)
    if(option){
        app.options.push(option)
        e.target.elements.option.value = ' '
        render()
    }
    
}
const removeAll = () => {
    app.options = []
    render()
}

const makeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length)
    const option = app.options[randomNum]
    alert(option)
    console.log(randomNum)
}


const appRoot = document.getElementById('app')
    const render = () =>{
        const template = (
            <div>
                <h1>{app.title}</h1>
                {app.subtitle &&<p> {app.subtitle}</p>}
                <p>{app.options.length > 0 ? 'Here is an option !':'No option'}</p>
                <p>{app.options.length}</p>
                <button disabled={app.options.length === 0 } onClick={makeDecision}> What should i do ?</button>
                <button onClick={removeAll}>remove</button>
                <ol>
                {
                
                    app.options.map ((option) =>{
                        return <li key={option}> {option}</li>
                    })
                }
                </ol>
                <form onSubmit={onFormSubmit}>
                 <input type="text" name="option"/>
                 <button>Add option </button>
                </form>
            </div>
            
        )
        ReactDOM.render(template ,appRoot)
    }


render()