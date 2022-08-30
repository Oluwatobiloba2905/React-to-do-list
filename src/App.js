import Listview from  './Listview';
import AddList from  './AddList';
import Listbar from './Listbar';
import { Component } from 'react';

class App extends Component{

  state = {tasks: [
    
    // {
    //   id:1,
    //   text: "sweep ",
    //   time: "3:pm",
    //   reminder: true,     
    // }
    ], showAddTask:true, userInput: ""}


    showHandler =()=> {
      const doesShow = this.state.showAddTask
      this.setState (
          {showAddTask: !doesShow}
      )}
    deleteHandler =(deleteIndex)=> {
      const deleteIt = this.state.tasks;
      deleteIt.splice(deleteIndex, 1)
      this.setState({deleteIt:deleteIt})
    }
    updateTask =()=>{
      this.setState (
        {showAddTask: false})
    }
    inputChangeHandler = (event) => {
      this.setState({
        userInput: event.target.value 
      })
    }
    newTodo =()=>{
      this.setState({
        tasks:[
          ...this.state.tasks, {text:this.state.userInput} ,{day:this.state.userInput }]
      })
    }
  
  render(){

    const mystyle = {
      backgroundColor: "darkblue"
    }

    let showing = null
    if(this.state.showAddTask){
        showing =  <AddList  update={this.updateTask}  clicking={this.newTodo}
        valued={this.state.newTodo} updating ={this.inputChangeHandler}></AddList>

        mystyle.backgroundColor = "red"
    }

    // const characterList = this.state.userInput.map((ch) => {return <div className='taskview'> {ch}  </div>
    // })

    return(
      <div className="App">
      <Listbar style={mystyle} showHandle={this.showHandler}></Listbar>
  
      <p>{showing } </p>
       {this.state.tasks.map((viewTask, index) =>
        {return <Listview clicked={()=>{this.deleteHandler(index)}} key={index} text={viewTask.text} day={viewTask.day} > </Listview> })
       }
       
       {this.inputChangeHandler}
     
      </div>
    )
  }
}
export default App;