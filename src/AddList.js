const Addlist = (props) => {
    return(
        <div className="addList">
            <h3>TO DO</h3>
            <input type='text' placeholder='What to do'
            onChange={props.updating}  value={props.valued}></input>
            <h3> Time</h3>
            <input type='number' placeholder=' Set-Time' 
            onChange={props.updating}  value={props.valued}></input>
            <h4>Add Reminder </h4>
            <input type='checkbox'className="checky"></input>
            { <button onDoubleClick={props.update} onClick = {props.clicking} >Save List</button> }
        </div>
    )
} 

export default Addlist;

