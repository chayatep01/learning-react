console.log('hello')

let visibility = false 
const toggle = () =>{
    visibility = !visibility
    render()
}
const render = () =>{
    const jsx =  (
        <div>
            <h1>Visible toggle</h1>
            <button onClick = {toggle}>
                {visibility ? 'Hide details':'Show details'}
            </button>
            {visibility && (
                <div>
                    <p> Details </p>
                </div>
             )}
        </div>
    
    ) 
    ReactDOM.render(jsx,document.getElementById('app'))

}

render()