let count = 0
const addOne = () =>{
    count++
    renderCounterApp()
}
const minusOne = () =>{
    count--
    renderCounterApp()
}
const Reset = () => {
    count = 0
    renderCounterApp()
}



var appRoot = document.getElementById('app')



const renderCounterApp =  () => {
    const templateThree = (
        <div>
           <h1> Count : {count}</h1>
           <button onClick={addOne} className="button">+1</button>
           <button onClick={minusOne} className="button">-1</button>
           <button onClick={Reset} className="button">reset</button>
        </div>
   )
   ReactDOM.render(template,appRoot)
}
renderCounterApp()
