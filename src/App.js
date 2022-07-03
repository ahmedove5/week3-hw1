import "./bootstrap.css"
import './App.css';
import { Component } from 'react'


  class App extends Component{
  
    
    addtask=()=>{
    
        let u=document.getElementById("myUL")
        let inputValue = document.getElementById("myInput").value;
        let li = document.createElement("li");
        let nodetext=document.createTextNode(inputValue)
        li.appendChild(nodetext)
        u.appendChild(li)

    }

  render(){
  return (
    <div className="App">
     
     
     
     
     
     
      <input id="myInput"></input>
      <button onClick={this.addtask} >add task</button>
      <ul id="myUL">
        
      </ul>

    </div>
  )
  }
}
  

  

export default App;
