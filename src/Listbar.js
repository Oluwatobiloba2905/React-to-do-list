const Listbar =(props)=> {
    return(
         <div>
            <div className="Listbar">
                <h1>To-Do-List</h1>
                <button style={props.style} onClick={props.showHandle} >Update  List</button>
            </div>
        </div>
    )
}
 

export default Listbar;